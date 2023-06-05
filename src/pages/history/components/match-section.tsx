import React from 'react'
import { Box, Chip, Grid, Skeleton, Stack, Typography, styled } from '@mui/material'
import { DailyMatches, Match } from '../../../types/match'
import MatchCard from './match-card'

const PointIndicator = styled(Box)(({ theme }) => ({
	background: theme.palette.primary.main,
	width: 10,
	height: 10
}))

const LineIndicator = styled(Box)(({ theme }) => ({
	background: theme.palette.primary.main,
	width: 4,
	height: 'flex',
	marginLeft: 2.5,
	marginRight: 2.5
}))

export interface MatchListProps {
	matches?: DailyMatches<Match>
}

export default ({ matches }: MatchListProps) => {
	if (!matches) {
		return (
			<Box>
				<Stack direction="row" alignItems="center" gap={2} my={1}>
					<PointIndicator />
					<Typography fontWeight={600} fontSize={20}>
						<Skeleton height={35} width={90} />
					</Typography>
					<Skeleton width={30} />
				</Stack>
				<Stack direction="row" gap={2}>
					<LineIndicator />
					<Grid container spacing={1} direction="column" my={1} mb={2}>
						{[1, 2, 3].map(index => (
							<MatchCard key={index} />
						))}
					</Grid>
				</Stack>
			</Box>
		)
	}

	return (
		<Box>
			<Stack direction="row" alignItems="center" gap={2} my={1}>
				<PointIndicator />
				<Typography fontWeight={600} fontSize={20}>
					{matches.date}
				</Typography>
				<Chip label={matches.matches.length} />
			</Stack>
			<Stack direction="row" gap={2}>
				<LineIndicator />
				<Grid container spacing={1} direction="column" my={1} mb={2}>
					{matches.matches.map((match, index) => (
						<MatchCard key={index} match={match} />
					))}
				</Grid>
			</Stack>
		</Box>
	)
}
