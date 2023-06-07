import React from 'react'
import { MatchTeam } from '../../../../types/match'
import PlayerSection from './player-section'
import { Typography, Divider, Box, Stack, Skeleton } from '@mui/material'

export interface TeamSectionProps {
	title: string
	teams?: MatchTeam[]
}

export default ({ teams, title }: TeamSectionProps) => {
	if (!teams) {
		return (
			<Stack>
				<Typography variant="h3" p={2}>
					<Skeleton width={100} height={35} />
				</Typography>
				<Divider />
				<Box p={2}>
					{[1, 2, 3].map(index => (
						<PlayerSection key={index} />
					))}
				</Box>
			</Stack>
		)
	}

	return (
		<Stack>
			<Typography variant="h3" p={2}>
				{title}
			</Typography>
			<Divider />
			<Box p={2}>
				{!teams.length && (
					<Box bgcolor="background.default" py={2}>
						<Typography fontWeight={600} fontSize={16} color="text.secondary" align="center">
							No teams
						</Typography>
					</Box>
				)}
				{teams.map((team, index) => (
					<PlayerSection key={index} players={team.players} faction={team.faction} />
				))}
			</Box>
		</Stack>
	)
}
