import React from 'react'
import { DashboardRounded } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Panel from '../../../../components/panel'
import StatisticPanel from './statistic-panel'
import { PlayerOverview } from '../../../../types/overview'

export interface OverviewPanelProps {
	stats: PlayerOverview
}

export default ({ stats }: OverviewPanelProps) => {
	return (
		<Panel title="Overview" icon={<DashboardRounded />}>
			<StatisticPanel
				title="Performance"
				statistics={[
					{
						title: 'Wins',
						value: stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
					},
					{
						title: 'Win %',
						value: (
							stats.gameStats.reduce((sum, { data }) => sum + data.played, 0) /
							stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
						).toFixed(2)
					},
					{
						title: 'Matches Played',
						value: stats.gameStats.reduce((sum, { data }) => sum + data.played, 0)
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
						title: 'Emeralds Collected',
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
		</Panel>
	)
}
