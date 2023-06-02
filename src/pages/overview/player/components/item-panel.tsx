import React from 'react'
import { Card, Typography } from '@mui/material'
import { Item } from '../../../../types/player'
import ItemCard from './item-card'

export interface ItemPanelProps {
	items: Item[]
}

export default ({ items }: ItemPanelProps) => {
	return (
		<Card>
			<Typography variant="h3" p={2}>
				Items
			</Typography>
			{items.map((item, index) => (
				<ItemCard key={index} item={item} />
			))}
		</Card>
	)
}
