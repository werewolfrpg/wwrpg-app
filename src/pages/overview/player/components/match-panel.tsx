import React from 'react'
import { Card, Chip, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { PlayerMatches } from '../../../../types/match'
import MatchCard from './match-card'

export interface MatchPanelProps {
	matches?: PlayerMatches
}

export default ({ matches }: MatchPanelProps) => {
	if (!matches) {
		return (
			<Card>
				{[1, 2, 3].map(index => (
					<Stack key={index}>
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
						<Divider />
					</Stack>
				))}
			</Card>
		)
	}

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
							<Typography variant="caption">
								{data.matches.reduce(
									(t, m) => t + (m.winner && m.winner?.roles.find(r => r.id === m.role?.id) ? 1 : 0),
									0
								)}
								W
							</Typography>
							•
							<Typography variant="caption">
								{data.matches.reduce(
									(t, m) => t + (m.winner && !m.winner?.roles.find(r => r.id === m.role?.id) ? 1 : 0),
									0
								)}
								L
							</Typography>
							•<Typography variant="caption">{data.duration}</Typography>•
							<Typography variant="caption">+{data.matches.reduce((t, m) => t + m.score, 0)}</Typography>
						</Stack>
					</Stack>
					<Divider />
					{data.matches.map(match => (
						<MatchCard match={match} key={match.matchId} {...match} />
					))}
					<Divider />
				</Stack>
			))}
		</Card>
	)
}
