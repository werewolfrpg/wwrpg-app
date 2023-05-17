import React from 'react'
import { TableRow, TableCell, Typography, Divider } from '@mui/material'
import { MatchOverview } from '../types/match'
import { useNavigate } from 'react-router-dom'
import Table from './table'
import Title from './title'

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
			header={<Title title="Matches" divider />}
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
