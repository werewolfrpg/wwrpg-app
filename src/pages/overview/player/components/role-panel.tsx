import React from 'react'
import RoleCard from './role-card'
import { Role } from '../../../../types/player'
import { Box, Card, Divider, Typography } from '@mui/material'

export interface RolePanelProps {
	roles: Role[]
}

export default ({ roles }: RolePanelProps) => {
	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<Typography variant="h3" sx={{ px: 1 }}>
					Roles
				</Typography>
			</Box>
			<Divider />
			{roles.map((role, index) => (
				<RoleCard key={index} role={role} />
			))}
		</Card>
	)
}
