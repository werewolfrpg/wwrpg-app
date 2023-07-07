import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ItemInfo } from '../../../types/item'

export interface ItemSectionProps {
	items: ItemInfo[]
}

export default ({ items }: ItemSectionProps) => {
	return (
		<Grid container spacing={8}>
			{items.map((item, index) => (
				<Grid item key={index}>
					<Stack alignItems="center">
						<Box component="img" src={item.image} width="50px" />
						<Typography variant="h3">{item.name}</Typography>
						<Typography variant="caption">{item.description}</Typography>
					</Stack>
				</Grid>
			))}
		</Grid>
	)
}
