import React from 'react'
import { Card, Typography, Divider } from '@mui/material'
import StatisticPanel from '../../player/components/statistic-panel'
import { GameMatch } from '../../../../types/match'

export interface MatchOverviewProps {
	game?: GameMatch
}

export default ({ game }: MatchOverviewProps) => {
	return (
		<Card>
			<Typography variant="h3" p={2}>
				Game Report
			</Typography>
			<Divider />
			<StatisticPanel
				statistics={[
					{
						title: 'Map',
						value: game?.overview.map?.name
					},
					{
						title: 'Duration',
						value: game?.overview.duration
					},
					{
						title: 'Winners',
						value: game ? (game?.overview.winner ? game.overview.winner.name : 'Canceled') : null,
						color: game?.overview.winner?.color ?? 'white'
					},
					{
						title: 'Date',
						value: game ? game.overview.date + ', ' + game.overview.time : undefined
					}
				]}
			/>
			<Divider />
			<StatisticPanel
				title="Teams"
				statistics={
					game
						? [
								{
									title: 'Total Players',
									value: game.teams.reduce((total, team) => total + team.players.length, 0)
								},
								...game.teams.map(team => ({
									title: team.faction.name,
									color: team.faction.color,
									value: team.players.length
								}))
						  ]
						: undefined
				}
			/>
		</Card>
	)
}
