import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Matches } from '../../../../types/match'

export interface MatchesPanelProps {
	matches: Matches
}

export default ({ matches }: MatchesPanelProps) => {
	return <Stack></Stack>
}

const DateHeader = ({}) => {
	return (
		<Stack>
			<Typography variant="h4"></Typography>
		</Stack>
	)
}
