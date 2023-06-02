import { useState } from 'react'
import { Item } from '../../../../types/player'
import { ArrowUpwardRounded, ArrowDownwardRounded } from '@mui/icons-material'
import { Box, Divider, Stack, Typography, Collapse, styled } from '@mui/material'
import StatisticPanel from './statistic-panel'

const Container = styled(Stack)(({ theme }) => ({
	cursor: 'pointer',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: theme.spacing(2)
}))

export interface ItemCardProps {
	item: Item
}

export default ({ item }: ItemCardProps) => {
	const [revealed, setRevealed] = useState(false)

	return (
		<Box>
			<Divider />
			<Container direction="row" onClick={() => setRevealed(!revealed)}>
				<Typography variant="h4">{item.name}</Typography>
				{revealed ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />}
			</Container>
			<Collapse in={revealed}>
				<StatisticPanel
					statistics={Object.entries(item.stats).map(([title, value]) => ({
						title: title[0].toLocaleUpperCase() + title.replace(/([A-Z])/g, ' $1').substring(1),
						value
					}))}
				/>
			</Collapse>
		</Box>
	)
}
