import React from 'react'
import { Card, Typography, Divider } from '@mui/material'
import StatisticPanel from '../../player/components/statistic-panel'
import { MatchPlayer } from '../../../../types/match'

export interface PerformancePanelProps {
	player?: MatchPlayer
}

export default ({ player }: PerformancePanelProps) => {
	if (!player) {
		return (
			<Card>
				<Typography variant="h3" p={2}>
					Game Performance
				</Typography>
				<Divider />
				<StatisticPanel />
				<Divider />
				<StatisticPanel title="Skeletons Punished" />
			</Card>
		)
	}

	return (
		<Card>
			<Typography variant="h3" p={2}>
				Game Performance
			</Typography>
			<Divider />
			<StatisticPanel
				statistics={[
					{
						title: 'Kills',
						value: player.kills
					},
					{
						title: 'Score',
						value: '+' + player.score
					}
				]}
			/>
			<Divider />
			<StatisticPanel
				title="Skeletons Punished"
				statistics={[
					{
						title: 'Emeralds',
						value: player.skeletons.emeralds
					},
					{
						title: 'Common Killed',
						value: player.skeletons.killed.basic
					},
					{
						title: 'Lucky Killed',
						value: player.skeletons.killed.lucky
					},
					{
						title: 'Special Killed',
						value: player.skeletons.killed.special
					}
				]}
			/>
		</Card>
	)
}
