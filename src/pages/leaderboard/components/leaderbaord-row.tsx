import React from 'react'
import { Grid, Hidden, Skeleton, Stack } from '@mui/material'

export interface LeaderboardRowProps {
	values?: (string | React.ReactNode)[]
	skeleton?: boolean
	light?: boolean
	onClick?: () => unknown
}

export default ({ values, light, skeleton, onClick }: LeaderboardRowProps) => {
	if (skeleton) {
		values = [
			<Skeleton width={20} />,
			<Stack direction="row" alignItems="center" gap={3}>
				<Skeleton width={40} height={40} variant="circular" />
				<Skeleton width={100} />
			</Stack>,
			<Skeleton width={60} />,
			<Skeleton width={40} />,
			<Skeleton width={40} />,
			<Skeleton width={30} />
		]
	}

	const [rank, player, title, score, win, matches] = values!

	return (
		<Grid
			container
			onClick={onClick}
			style={{ cursor: onClick ? 'pointer' : 'inherit' }}
			bgcolor={light ? 'background.default' : 'background.paper'}
			p={2}
		>
			<Grid item justifySelf="center" alignSelf="center" xs={1}>
				{rank}
			</Grid>
			<Grid item justifySelf="center" alignSelf="center" xs>
				{player}
			</Grid>
			<Hidden smDown>
				<Grid item justifySelf="center" alignSelf="center" xs={2}>
					<Stack alignItems="center">{title}</Stack>
				</Grid>
			</Hidden>
			<Grid item justifySelf="center" alignSelf="center" xs={1}>
				<Stack alignItems="center">{score}</Stack>
			</Grid>
			<Hidden smDown>
				<Grid item justifySelf="center" alignSelf="center" xs={1}>
					<Stack alignItems="center">{win}</Stack>
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs={2}>
					<Stack alignItems="end">{matches}</Stack>
				</Grid>
			</Hidden>
		</Grid>
	)
}
