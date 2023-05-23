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
		<Stack
			direction="row"
			alignItems="center"
			gap={1}
			// my={0.25}
			style={{ cursor: 'pointer' }}
			onClick={() => navigate('/overview/match/' + matchId)}
		>
			<Box style={{ background: 'red', width: 4, height: 60 }} />
			<Stack direction="row" alignItems="center" mx={2} gap={10}>
				<Box component="img" src={require('../../../../assets/icon.png')} width={32} height={32} />
				<Statistic title="Score" value={score} />
				<Statistic title={role} value={duration} />
			</Stack>
			<Box
				style={{
					backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0)), url(${require('../../../../assets/map.png')}`,
					backgroundPosition: 'center',
					height: 60,
					flex: 1
				}}
			/>
		</Stack>
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
