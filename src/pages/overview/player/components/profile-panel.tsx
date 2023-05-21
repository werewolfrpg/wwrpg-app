import React from 'react'
import { Stack, Box, LinearProgress, Typography, Divider, Card } from '@mui/material'
import StatisticCard from './statistic-card'
import { PlayerOverview } from '../../../../types/overview'
import Title from '../../../../components/title'
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
			<Title title={minecraftUsername} divider />
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
