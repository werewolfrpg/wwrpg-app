import React, { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Card, Stack, Box, Tabs, Tab, Tooltip, Typography } from '@mui/material'
import ItemPanel from '../../player/components/item-panel'
import PerformancePanel from './performance-panel'
import { ArrowOutwardRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import LeaderboardPlayer from '../../../leaderboard/components/leaderboard-player'

export interface PlayerModalProps {
	player: MatchPlayer
}

export default ({ player }: PlayerModalProps) => {
	const [tab, setTab] = useState(0)

	return (
		<Card style={{ width: '70vw', maxHeight: '70vh', overflow: 'auto' }}>
			<Stack p={3} gap={2}>
				<Stack direction="row" justifyContent="space-between">
					<LeaderboardPlayer
						username={player.username}
						minecraftId={player.minecraftId}
						caption={
							<Typography variant="caption" color={player.role.color}>
								{player.role.name}
							</Typography>
						}
					/>
					<Tooltip title={'View ' + player.username + "'s profile"}>
						<Link to={'/overview/player/' + player.minecraftId} style={{ color: 'inherit' }}>
							<Box m={1}>
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
					<ItemPanel items={player.items.filter(i => Object.values(i.stats).some(v => v !== 0))} />
				)}
			</Stack>
		</Card>
	)
}
