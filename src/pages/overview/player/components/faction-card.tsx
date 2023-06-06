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
			<Stack direction="row" p={2} gap={1}>
				<Stack alignItems="center" justifyContent="center">
					<StatisticProgress progress={0} />
				</Stack>
				<Stack justifyContent="space-between" width="100%">
					<Typography variant="h5" px={2} mb={1}>
						<Skeleton width={60} />
					</Typography>
					<Stack direction="row">
						<Statistic title="Victories" />
						<Statistic title="Defeats" />
					</Stack>
				</Stack>
			</Stack>
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
