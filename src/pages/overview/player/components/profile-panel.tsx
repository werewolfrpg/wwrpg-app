import React from 'react'
import { Stack, Box, Typography, Divider, Card, Tooltip, LinearProgress, Skeleton } from '@mui/material'
import { PlayerStatistic } from '../../../../types/player'
import Statistic from './statistic'

export interface ProfilePanelProps {
	stats?: PlayerStatistic
}

export default ({ stats }: ProfilePanelProps) => {
	if (!stats) {
		return (
			<Card>
				<Stack p={2} justifyContent="center" alignItems="center">
					<Typography variant="h4" fontSize={25}>
						<Skeleton width={100} />
					</Typography>
					<Typography variant="h5" color="yellow">
						<Skeleton width={80} />
					</Typography>
				</Stack>
				<Divider />
				<Stack direction="row" alignItems="center" justifyContent="center" py={2}>
					<Statistic title="Rank" />
					<Box component="img" height={150} />
					<Statistic title="Points" />
				</Stack>
				<LinearProgress value={0} variant="determinate" />
				<Stack direction="row" justifyContent="center" alignItems="center" p={1} gap={1}>
					<Typography variant="caption">
						<Skeleton width={80} />
					</Typography>
					<Typography color="purple" variant="h5">
						<Skeleton width={80} />
					</Typography>
				</Stack>
			</Card>
		)
	}

	return (
		<Card>
			<Stack p={2} justifyContent="center" alignItems="center">
				<Typography variant="h4" fontSize={25}>
					{stats.username}
				</Typography>
				<Typography variant="h5" color="yellow">
					{stats.title.current}
				</Typography>
			</Stack>
			<Divider />
			<Stack direction="row" alignItems="center" justifyContent="center" py={2}>
				<Statistic title="Rank" value={'#' + stats.rank} />
				<Box component="img" src={'https://mc-heads.net/body/' + stats.minecraftId} height={150} />
				<Statistic title="Points" value={stats.score.current} />
			</Stack>
			<LinearProgress value={stats.score.progress} variant="determinate" />
			<Tooltip
				placement="bottom"
				title={
					stats.title.next
						? stats.score.difference + ' levels needed to reach ' + stats.title.next
						: 'Max level reached!'
				}
			>
				<Stack direction="row" justifyContent="center" alignItems="center" p={1} gap={1}>
					<Typography variant="caption">
						{stats.title.next ? stats.score.difference + ' until' : 'Max level reached!'}
					</Typography>
					<Typography color="purple" variant="h5">
						{stats.title.next}
					</Typography>
				</Stack>
			</Tooltip>
		</Card>
	)
}
