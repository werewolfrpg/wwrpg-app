import React from 'react'
import { PlayerStatistic } from '../../../../types/player'
import { Card, Divider, Typography } from '@mui/material'
import StatisticPanel from './statistic-panel'

export interface OverviewPanelProps {
	stats?: PlayerStatistic
}

export default ({ stats }: OverviewPanelProps) => {
	return (
		<Card>
			<Typography variant="h3" p={2}>
				Overview
			</Typography>
			<Divider />
			<StatisticPanel
				title="Performance"
				statistics={[
					{
						title: 'Wins',
						value: stats?.matches.won
					},
					{
						title: 'Win %',
						value: stats ? ((stats?.matches.won / stats?.matches.played) * 100).toFixed(1) : undefined
					},
					{
						title: 'Matches Played',
						value: stats?.matches.played
					}
				]}
			/>
			<StatisticPanel
				statistics={[
					{
						title: 'Kills',
						value: stats?.kills
					},
					{
						title: 'Deaths',
						value: stats?.deaths
					},
					{
						title: 'K/D',
						value: stats ? (stats?.kills / stats?.deaths).toFixed(2) : undefined
					}
				]}
			/>
			<Divider />
			<StatisticPanel
				title="Skeletons Punished"
				statistics={[
					{
						title: 'Emeralds',
						value: stats?.skeletons.emeralds
					},
					{
						title: 'Common Killed',
						value: stats?.skeletons.killed.basic
					},
					{
						title: 'Lucky Killed',
						value: stats?.skeletons.killed.lucky
					},
					{
						title: 'Special Killed',
						value: stats?.skeletons.killed.special
					}
				]}
			/>
		</Card>
	)
}
