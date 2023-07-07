import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Faction } from '../../../types/faction'

export interface ObjectivePanelProps {
	faction: Faction
}

export default ({ faction }: ObjectivePanelProps) => {
	return (
		<Stack alignItems="center" justifyContent="center">
			<Typography variant="h2" color={faction.color}>
				{faction.name}
			</Typography>
			<Stack>
				{faction.roles.map((role, index) => (
					<Box key={index}>
						<Typography variant="h4" color={faction.color}>
							{role.name}
						</Typography>
					</Box>
				))}
			</Stack>
		</Stack>
	)
}
