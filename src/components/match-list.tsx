import React from 'react'
import { TableRow, TableCell, Typography } from '@mui/material'
import { MatchOverview } from '../types/match'
import { useNavigate } from 'react-router-dom'
import Table from './table'

export interface MatchListProps {
	matches: MatchOverview
}

export default ({ matches }: MatchListProps) => {
	const navigate = useNavigate()

	return (
		<Table
			data={matches.data}
			count={20}
			total={matches.meta.totalPageNumber * 20}
			headers={['Match History']}
			row={({ matchId, map, startTime, endTime, winner }) => (
				<TableRow key={matchId} onClick={() => navigate('/overview/match/' + matchId)}>
					<TableCell>
						<Typography variant="h3">{map}</Typography>
						<div>
							{startTime} - {endTime} - {winner}
						</div>
					</TableCell>
				</TableRow>
			)}
		/>
	)
}
