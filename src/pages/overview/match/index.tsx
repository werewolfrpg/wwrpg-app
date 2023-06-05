import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameMatch } from '../../../types/match'
import { getGameMatch } from '../../../apis/wwrpg'
import { Box, Card, Container, Divider, Stack, Typography, styled } from '@mui/material'
import AppLayout from '../../../layout/app'
import StatisticPanel from '../player/components/statistic-panel'
import PlayerSection from './components/player-section'

const Wallpaper = styled(Box)<{ image?: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to top, ${theme.palette.background.default}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	position: 'absolute',
	width: '100vw',
	height: '50vh',
	zIndex: -1000
}))

export default () => {
	const { matchId } = useParams<{ matchId: string }>()
	const [game, setGame] = useState<GameMatch | undefined>()

	useEffect(() => {
		if (matchId) {
			getGameMatch(matchId).then(setGame).catch(console.error)
		} else {
			setGame(undefined)
		}
	}, [matchId])

	return (
		<AppLayout>
			<Wallpaper image={game?.overview.map?.image} />
			<Container>
				<Box py={5}>
					<Card>
						<Typography variant="h3" p={2}>
							Game Report
						</Typography>
						<Divider />
						<StatisticPanel
							statistics={[
								{
									title: 'Map',
									value: game?.overview.map?.name
								},
								{
									title: 'Duration',
									value: game?.overview.duration
								},
								{
									title: 'State',
									value: game?.overview.state
								},
								{
									title: 'Date',
									value: game ? game.overview.date + ' @ ' + game.overview.time : undefined
								}
							]}
						/>
					</Card>
					<Stack py={2}>
						{game?.teams.map((team, index) => (
							<PlayerSection key={index} players={team.players} faction={team.faction} />
						))}
					</Stack>
				</Box>
			</Container>
		</AppLayout>
	)
}
