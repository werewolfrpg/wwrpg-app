import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider, Card } from '@mui/material'
import StatisticCard from './statistic-card'
import { PlayerOverview } from '../../../../types/overview'
import Title from '../../../../components/title'

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
		<Card>
			<Title title={minecraftUsername} divider />
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
		</Card>
	)
}
