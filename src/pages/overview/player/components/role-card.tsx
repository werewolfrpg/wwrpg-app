import React from 'react'
import { Box, Tooltip, Stack, Typography } from '@mui/material'
import StatisticProgress from './statistic-progress'
import { RoleStatistic } from '../../../../types/player'
import Statistic from './statistic'

export interface RoleCardProps {
	role?: RoleStatistic
}

export default ({ role }: RoleCardProps) => {
	if (!role) {
		return <div></div>
	}

	const { won, played } = role
	const winRate = played > 0 ? (won / played) * 100 : 0

	return (
		<Stack my={1}>
			<Typography variant="h4" color={role.role.color} mb={1}>
				{role.role.name}
			</Typography>
			{!!winRate ? (
				<Stack direction="row" gap={2}>
					<Tooltip placement="left" title={'Win rate of ' + winRate.toFixed(2) + '%'}>
						<Box>
							<StatisticProgress progress={winRate} color={role.role.color} />
						</Box>
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
