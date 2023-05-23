import { useState } from 'react'
import { Box, Card, Collapse, Divider, Stack, Typography } from '@mui/material'
import { ArrowDownwardRounded, ArrowUpwardRounded, BlenderRounded } from '@mui/icons-material'
import StatisticPanel from './statistic-panel'
import { Item } from '../../../../types/player'

export interface ItemPanelProps {
	items: Item[]
}

export default ({ items }: ItemPanelProps) => {
	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<BlenderRounded />
				<Typography variant="h3" sx={{ px: 1 }}>
					Items
				</Typography>
			</Box>
			{items.map((item, index) => (
				<ItemCard key={index} {...item} />
			))}
		</Card>
	)
}

const ItemCard = (item: Item) => {
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
					{item.name}
				</Typography>
				{expanded ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />}
			</Stack>
			<Collapse in={expanded}>
				<StatisticPanel
					statistics={Object.entries(item.stats).map(([title, value]) => ({
						title: title.charAt(0).toLocaleUpperCase() + title.replace(/([A-Z])/g, ' $1').substring(1),
						value
					}))}
				/>
			</Collapse>
		</Box>
	)
}
