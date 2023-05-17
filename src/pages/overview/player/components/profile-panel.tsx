import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider } from '@mui/material'
import Panel from '../../../../components/panel'
import StatisticCard from './statistic-card'

export interface RankPanelProps {
	name: string
	score: number
	rank: number
}

export default ({ name, score, rank }: RankPanelProps) => {
	return (
		<Panel title={name}>
			<StatisticCard title="Rank" value={'#' + rank} />
			<Divider />
			<Stack>
				<StatisticCard title={'to cal.'} value={score} />
				<Box position="relative" sx={{ p: 1, mx: 1 }}>
					<LinearProgress variant="determinate" value={40} sx={{ color: 'silver' }} />
					<Typography fontSize={12}>1234 until next rank</Typography>
				</Box>
			</Stack>
		</Panel>
	)
}
