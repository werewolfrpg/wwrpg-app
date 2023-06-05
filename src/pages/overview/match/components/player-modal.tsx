import React from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Card, Stack, Box, Typography, Divider, Skeleton } from '@mui/material'
import ItemPanel from '../../player/components/item-panel'
import StatisticPanel from '../../player/components/statistic-panel'

export interface PlayerModalProps {
	player?: MatchPlayer
}

export default ({ player }: PlayerModalProps) => {
	return (
		<Card style={{ width: '70vw', height: '70vh', overflow: 'auto' }}>
			<Stack p={5} gap={3}>
				<Stack direction="row" gap={3}>
					<Stack gap={2} justifyContent="center">
						<Typography variant="h4" fontSize={25} align="center">
							{player ? player.username : <Skeleton width={80} />}
						</Typography>
						<Box component="img" src={'https://mc-heads.net/head/' + player?.minecraftId} />
					</Stack>
					<Card>
						<Typography variant="h3" p={2}>
							Game Performance
						</Typography>
						<Divider />
						<StatisticPanel
							statistics={[
								{
									title: 'Kills',
									value: player?.kills
								},
								{
									title: 'Score',
									value: '+' + player?.score
								}
							]}
						/>
						<Divider />
						<StatisticPanel
							title="Skeletons Punished"
							statistics={[
								{
									title: 'Emeralds',
									value: player?.skeletons.emeralds
								},
								{
									title: 'Common Killed',
									value: player?.skeletons.killed.basic
								},
								{
									title: 'Lucky Killed',
									value: player?.skeletons.killed.lucky
								},
								{
									title: 'Special Killed',
									value: player?.skeletons.killed.special
								}
							]}
						/>
					</Card>
				</Stack>
				<ItemPanel items={player?.items.filter(i => Object.values(i.stats).some(v => v !== 0))} />
			</Stack>
		</Card>
	)
}
