import React from 'react'
import { Box, Card, Stack, Typography } from '@mui/material'
import { Matches } from '../../../types/match'
import MatchSection from './match-section'

export interface MatchListProps {
	matches: Matches
}

export default ({ matches }: MatchListProps) => {
	return (
		<Card>
			<Stack p={2}>
				{matches.data.map((matches, index) => (
					<MatchSection key={index} matches={matches} />
				))}
				<Box>
					<Stack direction="row" alignItems="center" justifyContent="center" gap={1} my={5}>
						<Typography fontWeight={600} fontSize={20} color="text.secondary">
							No game history prior to {matches.data[matches.data.length - 1].date}
						</Typography>
					</Stack>
				</Box>
			</Stack>
		</Card>
	)
}
