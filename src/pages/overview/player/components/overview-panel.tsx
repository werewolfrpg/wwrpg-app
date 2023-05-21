import React from 'react'
import { DashboardRounded } from '@mui/icons-material'
import { Box, Card, Divider, Typography } from '@mui/material'
import StatisticPanel from './statistic-panel'
import { PlayerOverview } from '../../../../types/overview'

export interface OverviewPanelProps {
	stats: PlayerOverview
}

export default ({ stats }: OverviewPanelProps) => {
	const totalVictories = stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
	const totalPlayed = stats.gameStats.reduce((sum, { data }) => sum + data.played, 0)

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
						value: totalVictories
					},
					{
						title: 'Win %',
						value: ((totalPlayed / totalVictories) * 100).toFixed(1)
					},
					{
						title: 'Matches Played',
						value: totalPlayed
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
						value: stats.skeletons.basicSkeletonEmeraldDrops
					},
					{
						title: 'Basic Killed',
						value: stats.skeletons.killedBasicSkeletons
					},
					{
						title: 'Lucky Killed',
						value: stats.skeletons.killedLuckySkeletons
					},
					{
						title: 'Special Killed',
						value: stats.skeletons.killedSpecialSkeletons
					}
				]}
			/>
		</Card>
	)
}
