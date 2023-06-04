import { Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { Role } from '../../../../types/player'
import StatisticProgress from './statistic-progress'
import Statistic from './statistic'

export interface RoleCardProps {
	role?: Role
}

export default ({ role }: RoleCardProps) => {
	if (!role) {
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

	const winRate = role.played > 0 ? (role.won / role.played) * 100 : 0

	return (
		<Stack direction="row" p={2} gap={1}>
			<Tooltip placement="left" title={'Win rate of ' + winRate.toFixed(2) + '%'}>
				<Stack alignItems="center" justifyContent="center">
					<StatisticProgress progress={winRate} />
				</Stack>
			</Tooltip>
			<Stack justifyContent="space-between" width="100%">
				<Typography variant="h5" px={2} mb={1}>
					{role.name}
				</Typography>
				<Stack direction="row" justifyContent="space-between">
					<Statistic title="Victories" value={role.won} />
					<Statistic title="Defeats" value={role.played - role.won} />
				</Stack>
			</Stack>
		</Stack>
	)
}
