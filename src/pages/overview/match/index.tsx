import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Match, MatchPlayer } from '../../../types/match'
import { getMatch, getMatchPlayers } from '../../../apis/wwrpg'
import AppLayout from '../../../layout/app'
import { Box, Card, Container, Divider, Stack, Typography, styled } from '@mui/material'
import StatisticPanel from '../player/components/statistic-panel'

const Wallpaper = styled(Box)<{ image?: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to top, ${theme.palette.background.paper}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	outlineColor: theme.palette.background.paper,
	outlineWidth: 1
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
			<Wallpaper image={match?.map?.image} py={5}>
				<Container>
					<Card>
						<Typography variant="h3" p={2}>
							Overview
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
					<Stack>
						{Array(10)
							.fill(players)
							.map((player, index) => (
								<Card key={index}>{JSON.stringify(player)}</Card>
							))}
					</Stack>
				</Container>
			</Wallpaper>
		</AppLayout>
	)
}
