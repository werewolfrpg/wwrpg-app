import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerStatistic } from '../../../types/player'
import { getPlayerStats } from '../../../apis/wwrpg'
import { DailyMatches, PlayerMatch } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import { Box, Card, Container, Grid, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material'
import FactionPanel from './components/faction-panel'
import OverviewPanel from './components/overview-panel'
import ProfilePanel from './components/profile-panel'
import ItemPanel from './components/item-panel'
import MatchPanel from './components/match-panel'
import AppLayout from '../../../layout/app'

export default () => {
	const { minecraftId } = useParams<{ minecraftId: string }>()
	const [stats, setStats] = useState<PlayerStatistic | undefined>()
	const [matches, setMatches] = useState<DailyMatches<PlayerMatch>[] | undefined>()
	const [state, setState] = useState<'idle' | 'loading' | 'max'>('idle')
	const [page, setPage] = useState(1)
	const [tab, setTab] = useState(0)

	useEffect(() => {
		if (minecraftId) {
			getPlayerStats(minecraftId).then(setStats).catch(console.error)
			loadMoreGames()
		} else {
			setStats(undefined)
			setMatches(undefined)
		}
	}, [minecraftId])

	const loadMoreGames = async () => {
		if (state === 'idle' && minecraftId) {
			setState('loading')

			setPage(page + 1)
			const count = 10

			getPlayerMatchHistory(minecraftId, page, count).then(({ data, meta }) => {
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
					<Grid container gap={stats ? 4 : 6}>
						<Grid container item direction="column" xs={3} gap={3}>
							<Grid item>
								<ProfilePanel stats={stats} />
							</Grid>
							<Grid item>
								<FactionPanel factions={stats?.factions} />
							</Grid>
						</Grid>
						<Grid container item direction="column" xs gap={stats ? 0 : 3}>
							<Grid item mb={stats ? 3 : 0}>
								<Card>
									<Tabs value={tab} onChange={(_, i) => setTab(i)}>
										<Tab label="Overview" />
										<Tab label="Items" />
									</Tabs>
								</Card>
							</Grid>
							{tab === 0 ? (
								<>
									<Grid item>
										<OverviewPanel stats={stats} />
									</Grid>
									<Grid item>
										<Card>
											<MatchPanel matches={matches} />
											<Box m={2}>
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
											</Box>
										</Card>
									</Grid>
								</>
							) : (
								<Grid item>
									<ItemPanel items={stats?.items} />
								</Grid>
							)}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</AppLayout>
	)
}
