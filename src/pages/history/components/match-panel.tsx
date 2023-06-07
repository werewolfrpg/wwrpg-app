import React from 'react'
import { Stack } from '@mui/material'
import { DailyMatches } from '../../../types/match'
import MatchSection from './match-section'

export interface MatchPanelProps {
	matches?: DailyMatches[]
}

export default ({ matches }: MatchPanelProps) => {
	if (!matches) {
		return (
			<Stack>
				{[1, 2, 3].map(index => (
					<MatchSection key={index} />
				))}
			</Stack>
		)
	}

	return (
		<Stack>
			{matches.map((matches, index) => (
				<MatchSection key={index} matches={matches} />
			))}
		</Stack>
	)
}
