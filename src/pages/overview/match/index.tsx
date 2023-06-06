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
	width: '100%',
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
				<Stack py={5} gap={3}>
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
									title: 'Winners',
									value: game ? (game?.overview.winner ? game.overview.winner.name : 'Canceled') : null,
									color: game?.overview.winner?.color ?? 'white'
								},
								{
									title: 'Date',
									value: game ? game.overview.date + ', ' + game.overview.time : undefined
								}
							]}
						/>
						<Divider />
						<StatisticPanel
							title="Teams"
							statistics={
								game
									? [
											{
												title: 'Total Players',
												value: game.teams.reduce((total, team) => total + team.players.length, 0)
											},
											...game.teams.map(team => ({
												title: team.faction.name,
												color: team.faction.color,
												value: team.players.length
											}))
									  ]
									: undefined
							}
						/>
					</Card>
					<Card>
						<Stack>
							<Stack>
								<Typography variant="h3" p={2}>
									Winners
								</Typography>
								<Divider />
								<Box p={2}>
									{game
										? game.teams
												.filter(team => team.faction.id === game.overview.winner?.id)
												.map((team, index) => (
													<PlayerSection key={index} players={team.players} faction={team.faction} />
												))
										: [1, 2, 3].map(index => <PlayerSection key={index} />)}
								</Box>
							</Stack>
							<Stack>
								<Typography variant="h3" p={2}>
									Defeated
								</Typography>
								<Divider />
								<Stack p={2} gap={3}>
									{game
										? game.teams
												.filter(team => team.faction.id !== game.overview.winner?.id)
												.map((team, index) => (
													<PlayerSection key={index} players={team.players} faction={team.faction} />
												))
										: [1, 2, 3].map(index => <PlayerSection key={index} />)}
								</Stack>
							</Stack>
						</Stack>
					</Card>
				</Stack>
			</Container>
		</AppLayout>
	)
}
