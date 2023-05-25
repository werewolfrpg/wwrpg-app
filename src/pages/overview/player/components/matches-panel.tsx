import React from 'react'
import { Box, Card, Chip, Divider, Stack, Typography } from '@mui/material'
import { DailyMatches, PlayerMatch, PlayerMatches } from '../../../../types/match'
import { useNavigate } from 'react-router-dom'
import Statistic from './statistic'

export interface MatchesPanelProps {
	matches: PlayerMatches
}

export default ({ matches }: MatchesPanelProps) => {
	return (
		<Card>
			<Stack>
				{matches.data.map((data, index) => (
					<Stack key={data.date}>
						{index !== 0 && <Divider />}
						<DateHeader {...data} />
						{data.matches.map(match => (
							<MatchEntry key={match.matchId} {...match} />
						))}
					</Stack>
				))}
			</Stack>
		</Card>
	)
}

const MatchEntry = ({ score, role, duration, matchId }: PlayerMatch) => {
	const navigate = useNavigate()

	return (
		<Box
			onClick={() => navigate('/overview/match/' + matchId)}
			my={0.2}
			style={{
				backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${require('../../../../assets/map.png')}`,
				backgroundPosition: 'center',
				cursor: 'pointer'
			}}
		>
			<Stack direction="row" alignItems="center" m={2}>
				<Statistic title="Score" value={score} />
				<Statistic title={role} value={duration} />
			</Stack>
		</Box>
	)
}

const DateHeader = ({ date, matches }: DailyMatches<PlayerMatch>) => {
	return (
		<Stack>
			<Box my={1} mx={2}>
				<Stack direction="row" alignItems="center" gap={1}>
					<Typography variant="h4">{date}</Typography>
					<Chip variant="outlined" label={matches.length} />
				</Stack>
				<Stack direction="row" gap={1} alignItems="center">
					<Typography variant="caption">{matches.filter(m => m.role == m.winner).length} W</Typography>•
					<Typography variant="caption">{matches.filter(m => m.role != m.winner).length} L</Typography>
				</Stack>
			</Box>
			<Divider />
		</Stack>
	)
}
