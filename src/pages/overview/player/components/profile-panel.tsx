import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider } from '@mui/material'
import Panel from '../../../../components/panel'
import StatisticCard from './statistic-card'
import { PlayerOverview } from '../../../../types/overview'

export default ({
	minecraftUsername,
	score,
	ranking,
	title,
	nextTitle,
	currentThreshold,
	nextThreshold
}: PlayerOverview) => {
	const b = score - currentThreshold
	const a = nextThreshold - currentThreshold
	const scoreProgress = nextThreshold === -1 ? 100 : a / b

	return (
		<Panel title={minecraftUsername}>
			<StatisticCard title="Rank" value={'#' + ranking} />
			<Divider />
			<Stack>
				<StatisticCard title={title} value={score} />
				<Box position="relative" sx={{ p: 1, mx: 1 }}>
					<LinearProgress variant="determinate" value={scoreProgress} />
					<Typography fontSize={12} align="right">
						{nextThreshold === -1 ? 'Max score reached!' : a - b + ' until ' + nextTitle}
					</Typography>
				</Box>
			</Stack>
		</Panel>
	)
}
