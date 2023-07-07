import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Faction } from '../../../types/faction'

export interface ObjectivePanelProps {
	faction: Faction
}

export default ({ faction }: ObjectivePanelProps) => {
	return (
		<Grid container my={8}>
			<Grid item xs={4}>
				<Typography variant="h2" color={faction.color}>
					{faction.name}
				</Typography>
			</Grid>
			<Grid item xs>
				<Stack direction="row" alignItems="center">
					{faction.roles.map((role, index) => (
						<Box flex={0.5} key={index}>
							<Typography variant="h4" color={faction.color} mb={3}>
								{role.name}
							</Typography>
							<Typography variant="caption">{role.description ?? 'bla bla bla'}</Typography>
						</Box>
					))}
				</Stack>
			</Grid>
		</Grid>
	)
}
