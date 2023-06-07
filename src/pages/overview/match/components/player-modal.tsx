import React, { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Card, Stack, Box, Typography, Skeleton, Tabs, Tab, Tooltip } from '@mui/material'
import ItemPanel from '../../player/components/item-panel'
import PerformancePanel from './performance-panel'
import { ArrowOutwardRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export interface PlayerModalProps {
	player?: MatchPlayer
}

export default ({ player }: PlayerModalProps) => {
	const [tab, setTab] = useState(0)

	return (
		<Card style={{ width: '70vw', maxHeight: '70vh', overflow: 'auto' }}>
			<Stack p={3} gap={2}>
				<Stack direction="row" justifyContent="space-between">
					<Stack gap={2} direction="row">
						<Box
							component="img"
							height={40}
							borderRadius={1}
							src={'https://mc-heads.net/avatar/' + player?.minecraftId}
						/>
						<Typography variant="h4" fontSize={25} align="center">
							{player ? player.username : <Skeleton width={80} />}
						</Typography>
					</Stack>
					<Tooltip title={'View ' + player?.username + "'s profile"}>
						<Link to={'/overview/player/' + player?.minecraftId} style={{ color: 'inherit' }}>
							<Box m={2}>
								<ArrowOutwardRounded />
							</Box>
						</Link>
					</Tooltip>
				</Stack>
				<Card>
					<Tabs value={tab} onChange={(_, i) => setTab(i)}>
						<Tab label="Performance" />
						<Tab label="Items" />
					</Tabs>
				</Card>
				{tab == 0 ? (
					<PerformancePanel player={player} />
				) : (
					<ItemPanel items={player?.items.filter(i => Object.values(i.stats).some(v => v !== 0))} />
				)}
			</Stack>
		</Card>
	)
}
