import React from 'react'
import { AssignmentIndRounded } from '@mui/icons-material'
import Panel from '../../../components/panel'
import RoleCard from './role-card'
import { GameStats } from '../../../types/overview'

export interface RolePanelProps {
	roles: GameStats[]
}

export default ({ roles }: RolePanelProps) => {
	return (
		<Panel title="Roles" icon={<AssignmentIndRounded />}>
			{roles
				.sort((a, b) => a.data.played / a.data.victories - b.data.played / b.data.victories)
				.map((stat, index) => (
					<RoleCard key={index} {...stat} />
				))}
		</Panel>
	)
}
