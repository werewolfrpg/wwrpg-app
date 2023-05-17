import React from 'react'
import Panel from '../../../../components/panel'
import StatisticPanel from './statistic-panel'
import { BlenderRounded } from '@mui/icons-material'
import { Divider } from '@mui/material'

export interface Item {
	name: string
	stats: Record<string, string | number>
}

export interface ItemPanelProps {
	items: Item[]
}

export default ({ items }: ItemPanelProps) => {
	return (
		<Panel title="Items" icon={<BlenderRounded />}>
			{items.map((item, index) => (
				<>
					<StatisticPanel
						key={index}
						title={item.name}
						statistics={Object.entries(item.stats).map(([title, value]) => ({ title, value }))}
					/>
					{index != items.length - 1 && <Divider key={items.length + index} />}
				</>
			))}
		</Panel>
	)
}
