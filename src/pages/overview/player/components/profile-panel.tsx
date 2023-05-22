import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider, Card } from '@mui/material'
import { PlayerStatistic } from '../../../../types/player'
import StatisticCard from './statistic-card'
import Statistic from './statistic'

export interface ProfilePanelProps {
	stats: PlayerStatistic
}

export default ({ stats: { minecraftId, username, score, rank, title } }: ProfilePanelProps) => {
	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<Typography variant="h3" sx={{ px: 1 }}>
					{username}
				</Typography>
			</Box>
			<Divider />
			<Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
				<Box component="img" src={'https://mc-heads.net/body/' + minecraftId} height={200} />
				<Statistic title="Rank" value={'#' + rank} />
			</Stack>
			<Divider />
			<Stack>
				<StatisticCard title={title.current} value={score.current} />
				<Box position="relative" sx={{ p: 1, mx: 1 }}>
					<LinearProgress variant="determinate" value={score.progress} />
					<Typography fontSize={12} align="right">
						{title.next ? score.difference + ' until ' + title.next : 'Max score reached!'}
					</Typography>
				</Box>
			</Stack>
		</Card>
	)
}
