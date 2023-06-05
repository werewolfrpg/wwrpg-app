import React from 'react'
import { PlayerMatch } from '../../../../types/match'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Skeleton, Stack, Tooltip, styled } from '@mui/material'
import { WarningRounded } from '@mui/icons-material'
import Statistic from './statistic'

const Container = styled(Stack)<{ image?: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	cursor: 'pointer',
	alignItems: 'center',
	padding: theme.spacing(2),
	marginTop: theme.spacing(0.1),
	marginBottom: theme.spacing(0.1),
	gap: theme.spacing(3)
}))

const WinnerIndicator = styled(Box)<{ color?: string }>(({ color }) => ({
	width: 10,
	height: 10,
	borderRadius: 10,
	background: color ?? 'white',
	margin: 7
}))

export interface MatchCardProps {
	match?: PlayerMatch
}

export default ({ match }: MatchCardProps) => {
	const navigate = useNavigate()

	if (!match) {
		return (
			<Container image="" direction="row">
				<Grid container px={2}>
					<Grid item justifySelf="center" alignSelf="center" xs={1}>
						<Skeleton variant="circular" height={10} width={10} />
					</Grid>
					<Grid item justifySelf="center" alignSelf="center" xs={3}>
						<Statistic title="Role" />
					</Grid>
					<Grid item justifySelf="center" alignSelf="center" xs={3}>
						<Statistic title="Score" />
					</Grid>
					<Grid item justifySelf="center" alignSelf="center" xs={3}>
						<Statistic title="Duration" />
					</Grid>
				</Grid>
			</Container>
		)
	}

	return (
		<Container onClick={() => navigate('/overview/match/' + match.matchId)} image={match.map?.image} direction="row">
			<Grid container px={2}>
				<Grid item justifySelf="center" alignSelf="center" xs={1}>
					<Tooltip title={match.state}>
						{match.winner ? <WinnerIndicator color={match.winner.color} /> : <WarningRounded />}
					</Tooltip>
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs={3}>
					<Statistic title="Role" value={match.role?.name} color={match.role.color} />
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs={3}>
					<Statistic title="Duration" value={match.duration} />
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs={3}>
					<Statistic title="Score" value={'+' + match.score} />
				</Grid>
			</Grid>
		</Container>
	)
}
