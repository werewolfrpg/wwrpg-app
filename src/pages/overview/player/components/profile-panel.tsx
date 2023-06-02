import React from 'react'
import { Stack, Box, Typography, Divider, Card, Tooltip, LinearProgress } from '@mui/material'
import { PlayerStatistic } from '../../../../types/player'
import Statistic from './statistic'

export interface ProfilePanelProps {
	stats: PlayerStatistic
}

export default ({ stats: { minecraftId, username, score, rank, title } }: ProfilePanelProps) => {
	return (
		<Card>
			<Stack p={2} justifyContent="center" alignItems="center">
				<Typography variant="h4" fontSize={25}>
					{username}
				</Typography>
				<Typography variant="h5" color="yellow">
					{title.current}
				</Typography>
			</Stack>
			<Divider />
			<Stack direction="row" alignItems="center" justifyContent="center" py={2}>
				<Statistic title="Rank" value={'#' + rank} />
				<Box component="img" src={'https://mc-heads.net/body/' + minecraftId} height={150} />
				<Statistic title="Levels" value={score.current} />
			</Stack>
			<LinearProgress value={score.progress} variant="determinate" />
			<Tooltip
				placement="bottom"
				title={title.next ? score.difference + ' levels needed to reach ' + title.next : 'Max levels reached!'}
			>
				<Stack direction="row" justifyContent="center" alignItems="center" p={1} gap={1}>
					<Typography variant="caption">{title.next ? score.difference + ' until' : 'Max levels reached!'}</Typography>
					<Typography color="purple" variant="h5">
						{title.next}
					</Typography>
				</Stack>
			</Tooltip>
		</Card>
	)
}
