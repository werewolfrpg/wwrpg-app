import React from 'react'
import { PlayerMatch } from '../../../../types/match'
import { Link } from 'react-router-dom'
import { Box, Grid, Stack, styled } from '@mui/material'
import Statistic from './statistic'

const Container = styled(Stack)<{ image?: string }>(({ theme, image }) => ({
	backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, rgba(0, 0, 0, 0)), url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	alignItems: 'center',
	marginTop: theme.spacing(0.1),
	marginBottom: theme.spacing(0.1),
	gap: theme.spacing(3),
	height: 80
}))

const WinIndicator = styled(Box)<{ color: string }>(({ color }) => ({
	background: color,
	height: '100%',
	width: 5
}))

export interface MatchCardProps {
	match?: PlayerMatch
}

export default ({ match }: MatchCardProps) => {
	if (!match) {
		return (
			<Container image="" direction="row">
				<WinIndicator color="background.paper" />
				<Grid container px={2}>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Role" />
					</Grid>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Score" />
					</Grid>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Duration" />
					</Grid>
				</Grid>
			</Container>
		)
	}

	return (
		<Link
			to={'/overview/match/' + match.matchId}
			style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
		>
			<Container image={match.map?.image} direction="row" gap={1}>
				<WinIndicator
					color={
						match.winner === undefined
							? 'white'
							: match.winner.roles.find(role => role.id === match.role.id)
							? 'green'
							: 'red'
					}
				/>
				<Grid container p={2}>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Role" value={match.role?.name} color={match.role.color} />
					</Grid>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Duration" value={match.duration} />
					</Grid>
					<Grid item xs justifySelf="center" alignSelf="center">
						<Statistic title="Score" value={'+' + match.score} />
					</Grid>
				</Grid>
			</Container>
		</Link>
	)
}
