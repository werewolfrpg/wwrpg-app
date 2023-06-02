import React from 'react'
import { Box, Stack, Typography, Grid, Card, styled, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Match } from '../../../types/match'
import { WarningRounded } from '@mui/icons-material'

const colors: Record<string, string> = {
	VILLAGER: 'green',
	WEREWOLF: 'red',
	VAMPIRE: 'purple'
}

const Container = styled(Card)<{ image: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	cursor: 'pointer'
}))

const WinnerIndicator = styled(Box)<{ role: string }>(({ role }) => ({
	width: 10,
	height: 10,
	borderRadius: 10,
	background: colors[role] ?? 'white'
}))

export interface MatchCardProps {
	match: Match
}

export default ({ match }: MatchCardProps) => {
	const navigate = useNavigate()

	return (
		<Grid item>
			<Container
				image={require('../../../assets/images/map.png')}
				onClick={() => navigate('/overview/match/' + match.matchId)}
			>
				<Stack direction="row" alignItems="center" gap={3} p={3}>
					<Tooltip
						title={
							!match.winner
								? 'Game Canceled'
								: match.winner.charAt(0) + match.winner.substring(1).toLowerCase() + ' Victory'
						}
					>
						{!match.winner ? <WarningRounded /> : <WinnerIndicator role={match.winner} />}
					</Tooltip>
					<Typography variant="h4">{match.map.charAt(0).toUpperCase() + match.map.substring(1)}</Typography>
					<Typography variant="caption" color="text.secondary">
						{match.time + ' • ' + match.duration}
					</Typography>
				</Stack>
			</Container>
		</Grid>
	)
}
