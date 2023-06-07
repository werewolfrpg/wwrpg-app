import { useEffect, useState } from 'react'
import { DailyMatches } from '../../types/match'
import { Box, Card, Container, Skeleton, Stack, Typography } from '@mui/material'
import { getMatchHistory } from '../../apis/wwrpg'
import MatchPanel from './components/match-panel'
import AppLayout from '../../layout/app'

export default () => {
	const [matches, setMatches] = useState<DailyMatches[] | undefined>()
	const [state, setState] = useState<'idle' | 'loading' | 'max'>('idle')
	const [page, setPage] = useState(1)

	useEffect(() => {
		loadMoreGames()
	}, [])

	const loadMoreGames = async () => {
		if (state === 'idle') {
			setState('loading')

			setPage(page + 1)
			const count = 10

			getMatchHistory(page, count).then(({ data, meta }) => {
				setState(meta.entries === count ? 'idle' : 'max')

				if (!matches) {
					setMatches(data)
				} else {
					const merged = matches.map(m => {
						const found = data.find(d => d.date === m.date)

						if (found) {
							const filtered = m.matches.filter(c => !found.matches.find(i => i.matchId === c.matchId))
							return { ...found, matches: [...filtered, ...found.matches] }
						}
						return m
					})
					merged.push(...data.filter(day => !merged.some(k => k.date === day.date)))
					setMatches(merged)
				}
			})
		}
	}

	return (
		<AppLayout>
			<Container>
				<Box py={5}>
					<Card>
						<Stack p={2} gap={2}>
							<MatchPanel matches={matches} />
							{state !== 'max' && (
								<Card>
									<Stack
										bgcolor="background.default"
										py={1}
										style={{ cursor: state !== 'loading' ? 'pointer' : 'inherit', alignItems: 'center' }}
										onClick={loadMoreGames}
									>
										{state === 'loading' ? (
											<Skeleton width={80} />
										) : (
											<Typography fontWeight={600} fontSize={16} align="center">
												Load more games
											</Typography>
										)}
									</Stack>
								</Card>
							)}
						</Stack>
					</Card>
				</Box>
			</Container>
		</AppLayout>
	)
}
{
}
