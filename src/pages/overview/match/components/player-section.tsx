import React from 'react'
import { Box, Stack, Typography, styled } from '@mui/material'
import { MatchPlayer } from '../../../../types/match'
import PlayerCard from './player-card'
import { Faction } from '../../../../types/faction'

const LineIndicator = styled(Box)<{ color: string }>(({ theme, color }) => ({
	background: color,
	width: 8,
	height: 'flex',
	// marginLeft: 2.5,
	marginRight: 2.5
}))

export interface PlayerSectionProps {
	faction: Faction
	players: MatchPlayer[]
}

export default ({ faction, players }: PlayerSectionProps) => {
	return (
		<Stack style={{ cursor: 'pointer' }}>
			<Typography fontWeight={600} fontSize={20} bgcolor={faction.color}>
				{faction.name}
			</Typography>
			<Stack direction="row">
				<LineIndicator color={faction.color} />
				<Stack>
					{players.map((player, index) => (
						<PlayerCard key={index} player={player} light={index % 2 === 0} />
					))}
				</Stack>
			</Stack>
		</Stack>
	)
}
