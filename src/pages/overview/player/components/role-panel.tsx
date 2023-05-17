import React from 'react'
import { AssignmentIndRounded } from '@mui/icons-material'
import RoleCard from './role-card'
import { GameStats } from '../../../../types/overview'
import { Card } from '@mui/material'
import Title from '../../../../components/title'

export interface RolePanelProps {
	roles: GameStats[]
}

export default ({ roles }: RolePanelProps) => {
	const sorted = roles.sort(
		(a, b) => a.data.played / a.data.victories - b.data.played / b.data.victories
	)

	return (
		<Card>
			<Title title="Roles" icon={<AssignmentIndRounded />} divider />
			{sorted.map((stat, index) => (
				<RoleCard key={index} {...stat} />
			))}
		</Card>
	)
}
