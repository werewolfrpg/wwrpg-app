import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider, Card } from '@mui/material'
import { PlayerOverview } from '../../../../types/overview'
import StatisticCard from './statistic-card'
import Statistic from './statistic'

export default ({
	minecraftId,
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
			<Box sx={{ p: 2 }} display="flex">
				<Typography variant="h3" sx={{ px: 1 }}>
					{minecraftUsername}
				</Typography>
			</Box>
			<Divider />
			<Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
				<Box component="img" src={'https://mc-heads.net/body/' + minecraftId} height={200} />
				<Statistic title="Rank" value={'#' + ranking} />
			</Stack>
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
