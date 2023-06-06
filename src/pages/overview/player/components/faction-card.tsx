import React from 'react'
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { FactionStatistic } from '../../../../types/player'
import StatisticProgress from './statistic-progress'
import Statistic from './statistic'
import RoleCard from './role-card'

export interface FactionCardProps {
	stats?: FactionStatistic
}

export default ({ stats }: FactionCardProps) => {
	if (!stats) {
		return (
			<Box>
				<Stack gap={1} p={2}>
					<Skeleton width={80} height={35} />
					<Stack>
						{[1].map(index => (
							<RoleCard key={index} />
						))}
					</Stack>
				</Stack>
				<Divider />
			</Box>
		)
	}

	return (
		<Box>
			<Stack gap={1} p={2}>
				<Typography variant="h5" color={stats.faction.color}>
					{stats.faction.name}
				</Typography>
				<Stack>
					{stats.roles.map((role, index) => (
						<RoleCard key={index} role={role} />
					))}
				</Stack>
			</Stack>
			<Divider />
		</Box>
	)
}
