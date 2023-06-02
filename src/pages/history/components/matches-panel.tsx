import React from 'react'
import { Box, Card, Stack, Typography, useTheme } from '@mui/material'
import { Matches } from '../../../types/match'
import MatchSection from './match-section'

export interface MatchListProps {
	matches: Matches
}

export default ({ matches }: MatchListProps) => {
	const theme = useTheme()

	return (
		<Card>
			<Stack p={2}>
				{matches.data.map((matches, index) => (
					<MatchSection key={index} matches={matches} />
				))}
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
							No match history prior to {matches.data[matches.data.length - 1].date}
						</Typography>
					</Stack>
				</Box>
			</Stack>
		</Card>
	)
}
