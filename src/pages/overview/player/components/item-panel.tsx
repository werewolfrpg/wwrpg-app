import React, { useState } from 'react'
import StatisticPanel from './statistic-panel'
import {
	Box,
	Button,
	Card,
	Collapse,
	Divider,
	Stack,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import { Item } from '../../../../types/player'
import { ArrowDownwardRounded, ArrowUpwardRounded, BlenderRounded } from '@mui/icons-material'

export interface ItemPanelProps {
	items: Item[]
}

export default ({ items }: ItemPanelProps) => {
	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableRow>
						<Box sx={{ p: 2 }} display="flex">
							<BlenderRounded />
							<Typography variant="h3" sx={{ px: 1 }}>
								Items
							</Typography>
						</Box>
						<Divider />
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => (
						<>
							<ItemCard key={index} {...item} />
							{index != items.length - 1 && <Divider />}
						</>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const ItemCard = (item: Item) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<Box>
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
