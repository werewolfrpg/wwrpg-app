import React, { useState } from 'react'
import { ArrowUpwardRounded, ArrowDownwardRounded } from '@mui/icons-material'
import { Box, Divider, Stack, Typography, Collapse, Chip } from '@mui/material'

export interface ItemDescriptorProps {
	name: string
	description: string
	icon: string
	roles: string[]
	cost: number
	// shop: string
}

export default ({ name, description, icon, roles, cost }: ItemDescriptorProps) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<Box>
			<Divider />
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				p={2}
				style={{ cursor: 'pointer' }}
				onClick={() => setExpanded(!expanded)}
			>
				<Typography variant="h4" mx={2}>
					{name}
				</Typography>
				{expanded ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />}
			</Stack>
			<Collapse in={expanded}>
				<Stack mx={4} my={1}>
					<Stack direction="row" my={1} gap={1}>
						{roles.map((role, index) => (
							<Chip key={index} label={role} />
						))}
					</Stack>
					<Typography variant="caption" fontWeight={600}>
						Price: {cost}
					</Typography>
					<Typography variant="caption">{description}</Typography>
				</Stack>
			</Collapse>
		</Box>
	)
}
