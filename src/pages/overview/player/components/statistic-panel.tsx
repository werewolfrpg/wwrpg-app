import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { StatisiticProps } from './statistic'
import StatisticCard from './statistic-card'

export interface StatisticPanelProps {
	title?: string
	statistics: StatisiticProps[]
}

export default ({ title, statistics }: StatisticPanelProps) => {
	return (
		<Box>
			{title && (
				<Typography variant="h4" mx={4} mt={2}>
					{title}
				</Typography>
			)}
			<Stack direction="row">
				{statistics.map((stat, index) => (
					<StatisticCard key={index} {...stat} />
				))}
			</Stack>
		</Box>
	)
}
