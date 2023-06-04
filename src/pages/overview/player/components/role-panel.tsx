import React from 'react'
import RoleCard from './role-card'
import { Role } from '../../../../types/player'
import { Card, Divider, Typography } from '@mui/material'

export interface RolePanelProps {
	roles?: Role[]
}

export default ({ roles }: RolePanelProps) => {
	if (!roles) {
		return (
			<Card>
				<Typography variant="h3" p={2}>
					Roles
				</Typography>
				<Divider />
				{[1, 2, 3].map((_, index) => (
					<RoleCard key={index} />
				))}
			</Card>
		)
	}

	return (
		<Card>
			<Typography variant="h3" p={2}>
				Roles
			</Typography>
			<Divider />
			{roles.map((role, index) => (
				<RoleCard key={index} role={role} />
			))}
		</Card>
	)
}
