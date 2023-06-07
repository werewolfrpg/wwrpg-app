import React from 'react'
import { Chip, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { DailyMatches, PlayerMatch } from '../../../../types/match'
import MatchCard from './match-card'

export interface MatchPanelProps {
	matches?: DailyMatches<PlayerMatch>
}

export default ({ matches }: MatchPanelProps) => {
	if (!matches) {
		return (
			<Stack>
				<Stack direction="row" justifyContent="space-between" p={2}>
					<Stack direction="row" alignItems="center" gap={1} my={1}>
						<Typography fontWeight={600} fontSize={20}>
							<Skeleton height={35} width={90} />
						</Typography>
					</Stack>
					<Stack direction="row" gap={1} alignItems="center">
						<Skeleton width={40} />•
						<Skeleton width={40} />•
						<Skeleton width={80} />•
						<Skeleton width={30} />
					</Stack>
				</Stack>
				<Divider />
				{[1, 2, 4].map(index => (
					<MatchCard key={index} />
				))}
			</Stack>
		)
	}

	const wins = matches.matches.reduce(
		(t, m) => t + (m.winner && m.winner?.roles.find(r => r.id === m.role?.id) ? 1 : 0),
		0
	)
	const loses = matches.matches.reduce(
		(t, m) => t + (m.winner && !m.winner?.roles.find(r => r.id === m.role?.id) ? 1 : 0),
		0
	)
	const score = matches.matches.reduce((t, m) => t + m.score, 0)

	return (
		<Stack>
			<Stack direction="row" justifyContent="space-between" p={2}>
				<Stack direction="row" alignItems="center" gap={1} my={1}>
					<Typography fontWeight={600} fontSize={20}>
						{matches.date}
					</Typography>
					<Chip label={matches.matches.length} />
				</Stack>
				<Stack direction="row" gap={1} alignItems="center">
					<Typography variant="caption">{wins}W</Typography>•<Typography variant="caption">{loses}L</Typography>•
					<Typography variant="caption">{matches.duration}</Typography>•
					<Typography variant="caption">+{score}</Typography>
				</Stack>
			</Stack>
			<Divider />
			{matches.matches.map((match, index) => (
				<MatchCard match={match} key={index} />
			))}
		</Stack>
	)
}
