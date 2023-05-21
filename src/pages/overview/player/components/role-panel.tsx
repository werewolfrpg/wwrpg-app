import React from 'react'
import { AssignmentIndRounded } from '@mui/icons-material'
import RoleCard from './role-card'
import { GameStats } from '../../../../types/overview'
import { Box, Card, Divider, Typography } from '@mui/material'

export interface RolePanelProps {
	roles: GameStats[]
}

export default ({ roles }: RolePanelProps) => {
	const sorted = roles.sort(
		(a, b) => a.data.played / a.data.victories - b.data.played / b.data.victories
	)

	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<Typography variant="h3" sx={{ px: 1 }}>
					Roles
				</Typography>
			</Box>
			<Divider />
			{sorted.map((stat, index) => (
				<RoleCard key={index} {...stat} />
			))}
		</Card>
	)
}
