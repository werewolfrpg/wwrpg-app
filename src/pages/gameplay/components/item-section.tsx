import React from 'react'
import { Box, Card, Stack, Typography } from '@mui/material'
import { ItemInfo } from '../../../types/item'

export interface ItemSectionProps {
	items: ItemInfo[]
}

export default ({ items }: ItemSectionProps) => {
	return (
		<Stack gap={3}>
			{items.map((item, index) => (
				<Card key={index}>
					<Stack direction="row" alignItems="center" p={3} gap={3}>
						<Box component="img" src={item.image} flex={1} />
						<Box flex={12}>
							<Typography variant="h3" mb={2}>
								{item.name}
							</Typography>
							<Typography variant="caption" align="center">
								{item.description}
							</Typography>
						</Box>
					</Stack>
				</Card>
			))}
		</Stack>
	)
}
