import React from 'react'
import { Grid, Hidden, Skeleton, Stack } from '@mui/material'
import LeaderboardPlayer from './leaderboard-player'

export interface LeaderboardRowProps {
	values?: (string | React.ReactNode)[]
	light?: boolean
}

export default ({ values, light }: LeaderboardRowProps) => {
	if (!values) {
		values = [
			<Skeleton width={20} />,
			<LeaderboardPlayer />,
			<Skeleton width={40} />,
			<Hidden smDown>
				<Skeleton width={40} />
			</Hidden>,
			<Hidden smDown>
				<Skeleton width={30} />
			</Hidden>
		]
	}

	const [rank, player, score, win, matches] = values

	return (
		<Grid container bgcolor={light ? 'background.default' : 'background.paper'} p={2}>
			<Grid item justifySelf="center" alignSelf="center" xs={1}>
				{rank}
			</Grid>
			<Grid item justifySelf="center" alignSelf="center" xs>
				{player}
			</Grid>
			<Grid item justifySelf="center" alignSelf="center" xs>
				<Stack alignItems="center">{score}</Stack>
			</Grid>
			<Hidden smDown>
				<Grid item justifySelf="center" alignSelf="center" xs>
					<Stack alignItems="center">{win}</Stack>
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs>
					<Stack alignItems="center">{matches}</Stack>
				</Grid>
			</Hidden>
		</Grid>
	)
}
