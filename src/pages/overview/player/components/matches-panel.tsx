import React from 'react'
import { Card, Chip, Stack, Typography } from '@mui/material'
import { PlayerMatches } from '../../../../types/match'
import MatchCard from './match-card'

export interface MatchesPanelProps {
	matches: PlayerMatches
}

export default ({ matches }: MatchesPanelProps) => {
	return (
		<Card>
			{matches.data.map((data, index) => (
				<Stack key={index}>
					<Stack direction="row" justifyContent="space-between" p={2}>
						<Stack direction="row" alignItems="center" gap={1} my={1}>
							<Typography fontWeight={600} fontSize={20}>
								{data.date}
							</Typography>
							<Chip label={data.matches.length} />
						</Stack>
						<Stack direction="row" gap={1} alignItems="center">
							<Typography variant="caption">{data.matches.filter(m => m.role == m.winner).length} W</Typography>•
							<Typography variant="caption">{data.matches.filter(m => m.role != m.winner).length} L</Typography>•
							<Typography variant="caption">{data.duration}</Typography>
						</Stack>
					</Stack>
					{data.matches.map(match => (
						<MatchCard match={match} key={match.matchId} {...match} />
					))}
				</Stack>
			))}
		</Card>
	)
}
