import React from 'react'
import { Box, Tooltip, Stack, Typography, Skeleton } from '@mui/material'
import StatisticProgress from './statistic-progress'
import { RoleStatistic } from '../../../../types/player'
import Statistic from './statistic'

export interface RoleCardProps {
	role?: RoleStatistic
}

export default ({ role }: RoleCardProps) => {
	if (!role) {
		return (
			<Stack my={1}>
				<Skeleton width={80} height={30} />
				<Stack direction="row" gap={1} my={1}>
					<Stack alignItems="center" justifyContent="center">
						<StatisticProgress progress={0} />
					</Stack>
					<Stack direction="row" justifyContent="space-between" flex={1}>
						<Statistic />
						<Statistic />
					</Stack>
				</Stack>
			</Stack>
		)
	}

	const { won, played } = role
	const winRate = played > 0 ? (won / played) * 100 : 0

	return (
		<Stack my={1}>
			<Typography variant="h4" color={role.role.color} mb={1}>
				{role.role.name}
			</Typography>
			{!!winRate ? (
				<Stack direction="row" gap={1} my={1}>
					<Tooltip placement="left" title={'Win rate of ' + winRate.toFixed(2) + '%'}>
						<Stack alignItems="center" justifyContent="center">
							<StatisticProgress progress={winRate} color={role.role.color} />
						</Stack>
					</Tooltip>
					<Stack direction="row" justifyContent="space-between" flex={1}>
						<Statistic title="Victories" value={won} />
						<Statistic title="Defeats" value={played - won} />
					</Stack>
				</Stack>
			) : (
				<Typography fontWeight={600} fontSize={16} color="text.secondary" align="center" my={2}>
					Not played yet
				</Typography>
			)}
		</Stack>
	)
}
