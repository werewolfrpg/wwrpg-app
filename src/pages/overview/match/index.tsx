import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Match, MatchPlayer } from '../../../types/match'
import { getMatch, getMatchPlayers } from '../../../apis/wwrpg'
import { Box, Card, Container, Divider, Modal, Stack, Typography, styled } from '@mui/material'
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
	const [match, setMatch] = useState<Match | undefined>()
	const [players, setPlayers] = useState<MatchPlayer[] | undefined>()

	useEffect(() => {
		if (matchId) {
			getMatch(matchId).then(setMatch).catch(console.error)
			getMatchPlayers(matchId).then(setPlayers).catch(console.error)
		} else {
			setMatch(undefined)
			setPlayers(undefined)
		}
	}, [matchId])

	return (
		<AppLayout>
			<Wallpaper image={match?.map?.image} />
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
									value: match?.map?.name
								},
								{
									title: 'Duration',
									value: match?.duration
								},
								{
									title: 'State',
									value: match?.state
								},
								{
									title: 'Date',
									value: match ? match.date + ' @ ' + match.time : undefined
								}
							]}
						/>
					</Card>
					<Stack py={2}>
						{players && <PlayerSection players={players} faction="Villager" />}
						{players && <PlayerSection players={players} faction="Villager" />}
						{players && <PlayerSection players={players} faction="Villager" />}
						{players && <PlayerSection players={players} faction="Villager" />}
					</Stack>
				</Box>
			</Container>
		</AppLayout>
	)
}
