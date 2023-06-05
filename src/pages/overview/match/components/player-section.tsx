import React from 'react'
import { Box, Grid, Stack, Typography, styled } from '@mui/material'
import { MatchPlayer } from '../../../../types/match'
import PlayerCard from './player-card'

const LineIndicator = styled(Box)<{ color: string }>(({ theme, color }) => ({
	background: color,
	width: 8,
	height: 'flex',
	// marginLeft: 2.5,
	marginRight: 2.5
}))

export interface PlayerSectionProps {
	faction: string
	players: MatchPlayer[]
}

export default ({ faction, players }: PlayerSectionProps) => {
	return (
		<Stack style={{ cursor: 'pointer' }}>
			<Typography fontWeight={600} fontSize={20} bgcolor={'red'}>
				{faction}
			</Typography>
			<Stack direction="row">
				<LineIndicator color={'red'} />
				<Stack>
					{players.map((player, index) => (
						<PlayerCard key={index} player={player} light={index % 2 === 0} />
					))}
				</Stack>
			</Stack>
		</Stack>
	)
}
