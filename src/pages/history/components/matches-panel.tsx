import React from 'react'
import { Box, Card, Chip, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { Matches } from '../../../types/match'
import { useNavigate } from 'react-router-dom'

export interface MatchListProps {
	matches: Matches
}

export default ({ matches }: MatchListProps) => {
	const theme = useTheme()
	const navigate = useNavigate()

	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				<Typography variant="h3" sx={{ px: 1 }}>
					Matches
				</Typography>
			</Box>
			<Divider />
			<Stack p={2}>
				{matches.data.map(({ date, matches }, index) => (
					<Box key={index}>
						<Stack direction="row" alignItems="center" gap={1} my={1}>
							<Box
								style={{
									width: 10,
									height: 10,
									borderRadius: 10,
									background: theme.palette.primary.main
								}}
							/>
							<Typography fontWeight={600} fontSize={20}>
								{date}
							</Typography>
							<Chip label={matches.length} />
						</Stack>
						<Stack display="flex" direction="row" gap={1}>
							<Box style={{ width: 10, height: 'flex', display: 'flex', justifyContent: 'center' }}>
								<Box
									style={{
										width: 4,
										height: '100%',
										borderRadius: 4,
										background: theme.palette.primary.main
									}}
								/>
							</Box>
							<Grid container spacing={1} direction="column" my={1} mb={2}>
								{matches.map(match => (
									<Grid item key={match.matchId}>
										<Card onClick={() => navigate('/overview/match/' + match.matchId)} style={{ cursor: 'pointer' }}>
											<Box
												style={{
													backgroundImage: `linear-gradient(to right, #212121, rgba(0, 0, 0, 0)), 
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
								))}
							</Grid>
						</Stack>
					</Box>
				))}
				<Box>
					<Stack direction="row" alignItems="center" gap={1} my={1}>
						<Box
							style={{
								width: 10,
								height: 10,
								borderRadius: 10,
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
