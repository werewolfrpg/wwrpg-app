import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameMatch } from '../../../types/match'
import { getGameMatch } from '../../../apis/wwrpg'
import { Box, Card, Container, Stack, styled } from '@mui/material'
import AppLayout from '../../../layout/app'
import TeamSection from './components/team-section'
import MatchOverview from './components/match-overview'

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
					<MatchOverview game={game} />
					<Card>
						<Stack>
							{game ? (
								game?.overview.winner ? (
									<Stack>
										<TeamSection
											title="Winners"
											teams={game.teams.filter(team => team.faction.id === game.overview.winner?.id)}
										/>
										<TeamSection
											title="Defeated"
											teams={game.teams.filter(team => team.faction.id !== game.overview.winner?.id)}
										/>
									</Stack>
								) : (
									<TeamSection title="Players" teams={game.teams} />
								)
							) : (
								<Stack>
									<TeamSection title="Winners" />
									<TeamSection title="Defeated" />
								</Stack>
							)}
						</Stack>
					</Card>
				</Stack>
			</Container>
		</AppLayout>
	)
}
