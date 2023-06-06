import React from 'react'
import { Box, Card, Skeleton, Stack, Typography, styled } from '@mui/material'
import { MatchPlayer } from '../../../../types/match'
import PlayerCard from './player-card'
import { Faction } from '../../../../types/faction'

const LineIndicator = styled(Box)<{ color?: string }>(({ theme, color }) => ({
	background: color ?? theme.palette.background.default,
	width: 5,
	height: 'flex',
	borderRadius: 2
}))

export interface PlayerSectionProps {
	faction?: Faction
	players?: MatchPlayer[]
}

export default ({ faction, players }: PlayerSectionProps) => {
	if (!faction || !players) {
		return (
			<Stack direction="row" gap={2} flex={1}>
				<LineIndicator />
				<Box flex={1}>
					<Skeleton width={100} height={35} />
					<Stack flex={1}>
						{[1, 2, 3].map(index => (
							<PlayerCard key={index} light={index % 2 === 0} />
						))}
					</Stack>
				</Box>
			</Stack>
		)
	}

	return (
		<Stack direction="row" gap={2} flex={1}>
			<LineIndicator color={faction.color} />
			<Box flex={1} mb={1}>
				<Typography fontFamily="Minecraft Ten" fontSize={20} color={faction.color} mb={1}>
					{faction.name}
				</Typography>
				<Card>
					{!players.length && (
						<Box bgcolor="background.default" py={2}>
							<Typography fontWeight={600} fontSize={16} color="text.secondary" align="center">
								No players
							</Typography>
						</Box>
					)}
					{players.map((player, index) => (
						<PlayerCard key={index} player={player} light={index % 2 === 0} />
					))}
				</Card>
			</Box>
		</Stack>
	)
}
