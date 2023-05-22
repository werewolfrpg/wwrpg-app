import React from 'react'
import StatisticPanel from './statistic-panel'
import {
	Box,
	Card,
	Divider,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import { Item } from '../../../../types/player'
import { BlenderRounded } from '@mui/icons-material'

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
							<StatisticPanel
								key={index}
								title={item.name}
								statistics={Object.entries(item.stats).map(([title, value]) => ({
									title:
										title.charAt(0).toLocaleUpperCase() +
										title.replace(/([A-Z])/g, ' $1').substring(1),
									value
								}))}
							/>
							{index != items.length - 1 && <Divider />}
						</>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
