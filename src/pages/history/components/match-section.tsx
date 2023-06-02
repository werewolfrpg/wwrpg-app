import React from 'react'
import { Box, Chip, Grid, Stack, Typography, useTheme } from '@mui/material'
import { DailyMatches, Match } from '../../../types/match'
import MatchCard from './match-card'

export interface MatchListProps {
	matches: DailyMatches<Match>
}

export default ({ matches }: MatchListProps) => {
	const theme = useTheme()

	return (
		<Box>
			<Stack direction="row" alignItems="center" gap={1} my={1}>
				<Box
					style={{
						width: 10,
						height: 10,
						background: theme.palette.primary.main
					}}
				/>
				<Typography fontWeight={600} fontSize={20}>
					{matches.date}
				</Typography>
				<Chip label={matches.matches.length} />
			</Stack>
			<Stack display="flex" direction="row" gap={1}>
				<Box style={{ width: 10, height: 'flex', display: 'flex', justifyContent: 'center' }}>
					<Box
						style={{
							width: 4,
							height: '100%',
							background: theme.palette.primary.main
						}}
					/>
				</Box>
				<Grid container spacing={1} direction="column" my={1} mb={2}>
					{matches.matches.map((match, index) => (
						<MatchCard key={index} match={match} />
					))}
				</Grid>
			</Stack>
		</Box>
	)
}
