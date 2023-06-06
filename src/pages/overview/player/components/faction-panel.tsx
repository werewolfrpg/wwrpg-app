import React from 'react'
import RoleCard from './faction-card'
import { FactionStatistic } from '../../../../types/player'
import { Card, Divider, Typography } from '@mui/material'

export interface FactionPanelProps {
	factions?: FactionStatistic[]
}

export default ({ factions }: FactionPanelProps) => {
	if (!factions) {
		return (
			<Card>
				<Typography variant="h3" p={2}>
					Roles & Factions
				</Typography>
				<Divider />
				{[1, 2, 3].map(index => (
					<RoleCard key={index} />
				))}
			</Card>
		)
	}

	return (
		<Card>
			<Typography variant="h3" p={2}>
				Roles & Factions
			</Typography>
			<Divider />
			{factions.map((role, index) => (
				<RoleCard key={index} stats={role} />
			))}
		</Card>
	)
}
