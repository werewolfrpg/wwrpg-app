import React from 'react'
import { Box, Stack, Typography, Chip, Grid, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Match } from '../../../types/match'

export interface MatchCardProps {
	match: Match
}

export default ({ match }: MatchCardProps) => {
	const navigate = useNavigate()

	return (
		<Grid item key={match.matchId}>
			<Card onClick={() => navigate('/overview/match/' + match.matchId)} style={{ cursor: 'pointer' }}>
				<Box
					style={{
						backgroundImage: `linear-gradient(to right, #141414, rgba(0, 0, 0, 0)), 
                url(${require('../../../assets/images/map.png')}`,
						backgroundPosition: 'center'
					}}
				>
					<Stack gap={1} direction="row">
						{/* <Box style={{ background: 'red', width: 4, height: 'flex' }} /> */}
						<Stack p={2}>
							<Stack direction="row" alignItems="center" gap={1}>
								<Typography variant="h4">{match.map}</Typography>
								<Chip label={match.time + ' - ' + match.duration} />
							</Stack>
							<Box my={1}>{match.winner}</Box>
						</Stack>
					</Stack>
				</Box>
			</Card>
		</Grid>
	)
}
