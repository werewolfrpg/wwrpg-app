import React from 'react'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { Faction } from '../../../types/faction'

export interface ObjectivePanelProps {
	faction: Faction
}

export default ({ faction }: ObjectivePanelProps) => {
	return (
		<Stack mt={3}>
			<Stack gap={3}>
				<Typography align="center" variant="h2" mt={6} color={faction.color}>
					{faction.name}
				</Typography>
				<Typography align="center" variant="h4" my={3}>
					{faction.description}
				</Typography>
			</Stack>
			<Stack direction="row" gap={3} mt={5}>
				{faction.roles.map((role, index) => (
					<Card key={index}>
						<Box p={3} flex={0.5}>
							<Typography variant="h4" color={faction.color} mb={3}>
								{role.name}
							</Typography>
							<Typography variant="caption">{role.description}</Typography>
						</Box>
					</Card>
				))}
			</Stack>
		</Stack>
	)
}
