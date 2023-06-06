import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { Matches } from '../../../types/match'
import MatchSection from './match-section'

export interface MatchPanelProps {
	matches: Matches | null
}

export default ({ matches }: MatchPanelProps) => {
	if (!matches) {
		return (
			<Card>
				<Stack p={2}>
					{[1, 2, 3].map(index => (
						<MatchSection key={index} />
					))}
				</Stack>
			</Card>
		)
	}

	return (
		<Card>
			<Stack p={2}>
				{matches.data.map((matches, index) => (
					<MatchSection key={index} matches={matches} />
				))}
				<Typography fontWeight={600} fontSize={16} color="text.secondary" align="center" my={5}>
					No game history prior to {matches.data[matches.data.length - 1].date}
				</Typography>
			</Stack>
		</Card>
	)
}
