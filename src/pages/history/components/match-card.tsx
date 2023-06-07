import React from 'react'
import { Box, Grid, Card, styled, Tooltip, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import { Match } from '../../../types/match'
import { WarningRounded } from '@mui/icons-material'
import Statistic from '../../overview/player/components/statistic'

const Container = styled(Card)<{ image?: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	textDecoration: 'none',
	flex: 1
}))

const WinnerIndicator = styled(Box)<{ color?: string }>(({ color }) => ({
	width: 10,
	height: 10,
	borderRadius: 10,
	background: color ?? 'white',
	margin: 7
}))

export interface MatchCardProps {
	match?: Match
}

export default ({ match }: MatchCardProps) => {
	if (!match) {
		return (
			<Container image="">
				<Grid container direction="row" p={2} gap={3}>
					<Grid item alignSelf="center" justifySelf="center" xs={1}>
						<Skeleton variant="circular" height={10} width={10} />
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic />
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic />
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic />
					</Grid>
				</Grid>
			</Container>
		)
	}

	return (
		<Link to={'/overview/match/' + match.matchId} style={{ textDecoration: 'none' }}>
			<Container image={match.map?.image}>
				<Grid container direction="row" p={2} gap={3}>
					<Grid item alignSelf="center" justifySelf="center" xs={1}>
						<Tooltip title={match.state}>
							{match.winner ? <WinnerIndicator color={match.winner.color} /> : <WarningRounded />}
						</Tooltip>
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic title="Map" value={match.map?.name} />
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic title="Duration" value={match.duration} />
					</Grid>
					<Grid item xs alignSelf="center" justifySelf="center">
						<Statistic title="Time" value={match.time} />
					</Grid>
				</Grid>
			</Container>
		</Link>
	)
}
