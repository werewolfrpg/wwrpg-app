import React from 'react'
import { MilitaryTech } from '@mui/icons-material'
import { Stack, Box, LinearProgress, Typography } from '@mui/material'
import Panel from '../../../components/panel'
import Statistic from './statistic'

export interface RankPanelProps {
	title: string
	score: number
}

export default ({ title, score }: RankPanelProps) => {
	return (
		<Panel title="Rank" icon={<MilitaryTech />}>
			<Stack>
				<Box sx={{ py: 1 }}>
					<Statistic title={title} value={score} caption="Rank #24" />
				</Box>
				<Box position="relative" sx={{ p: 1, mx: 1 }}>
					<LinearProgress variant="determinate" value={40} sx={{ color: 'silver' }} />
					<Typography fontSize={12}>1234 until next rank</Typography>
				</Box>
			</Stack>
		</Panel>
	)
}
