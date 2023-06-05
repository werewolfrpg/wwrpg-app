import React from 'react'
import { Box, Card, Stack, Typography, styled } from '@mui/material'
import { MatchPlayer } from '../../../../types/match'
import PlayerCard from './player-card'
import { Faction } from '../../../../types/faction'

const LineIndicator = styled(Box)<{ color: string }>(({ theme, color }) => ({
	background: color,
	width: 5,
	height: 'flex'
	// marginLeft: 2.5,
}))

export interface PlayerSectionProps {
	faction: Faction
	players: MatchPlayer[]
}

export default ({ faction, players }: PlayerSectionProps) => {
	return (
		<Stack flex={1}>
			<Typography fontFamily="Minecraft Ten" fontSize={20} color="text.secondary">
				{faction.name}
			</Typography>
			<Box my={2}>
				<Stack direction="row">
					<LineIndicator color={faction.color} />
					<Stack flex={1}>
						{players.map((player, index) => (
							<PlayerCard key={index} player={player} light={index % 2 === 0} />
						))}
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}
