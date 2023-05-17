import React from 'react'
import StatisticPanel from './statistic-panel'
import { AssignmentIndRounded, BlenderRounded } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Title from '../../../../components/title'
import Table from '../../../../components/table'

export interface Item {
	name: string
	stats: Record<string, string | number>
}

export interface ItemPanelProps {
	items: Item[]
}

export default ({ items }: ItemPanelProps) => {
	return (
		<Table
			data={items}
			count={items.length}
			total={items.length}
			header={<Title title="Item Statistics" icon={<BlenderRounded />} divider />}
			row={(item, index) => (
				<>
					<StatisticPanel
						key={index}
						title={item.name}
						statistics={Object.entries(item.stats).map(([title, value]) => ({ title, value }))}
					/>
					<Divider key={items.length + index} />
				</>
			)}
		/>
	)
}
