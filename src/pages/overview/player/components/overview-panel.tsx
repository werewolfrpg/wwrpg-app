import React from 'react'
import { DashboardRounded } from '@mui/icons-material'
import { PlayerStatistic } from '../../../../types/player'
import { Box, Card, Divider, Typography } from '@mui/material'
import StatisticPanel from './statistic-panel'

export interface OverviewPanelProps {
	stats: PlayerStatistic
}

export default ({ stats }: OverviewPanelProps) => {
	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<DashboardRounded />
				<Typography variant="h3" sx={{ px: 1 }}>
					Overview
				</Typography>
			</Box>
			<Divider />
			<StatisticPanel
				title="Performance"
				statistics={[
					{
						title: 'Wins',
						value: stats.matches.won
					},
					{
						title: 'Win %',
						value: ((stats.matches.won / stats.matches.played) * 100).toFixed(1)
					},
					{
						title: 'Matches Played',
						value: stats.matches.played
					}
				]}
			/>
			<StatisticPanel
				statistics={[
					{
						title: 'Kills',
						value: stats.kills
					},
					{
						title: 'Deaths',
						value: stats.deaths
					},
					{
						title: 'K/D',
						value: (stats.kills / stats.deaths).toFixed(2)
					}
				]}
			/>
			<Divider />
			<StatisticPanel
				title="Skeletons Punished"
				statistics={[
					{
						title: 'Emeralds',
						value: stats.skeletons.emeralds
					},
					{
						title: 'Basic Killed',
						value: stats.skeletons.killed.basic
					},
					{
						title: 'Lucky Killed',
						value: stats.skeletons.killed.lucky
					},
					{
						title: 'Special Killed',
						value: stats.skeletons.killed.special
					}
				]}
			/>
		</Card>
	)
}
