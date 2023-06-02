import { Stack, Tooltip, Typography } from '@mui/material'
import { Role } from '../../../../types/player'
import Statistic from './statistic'
import StatisticProgress from './statistic-progress'

export interface RoleCardProps {
	role: Role
}

export default ({ role: { name, played, won } }: RoleCardProps) => {
	const winRate = played > 0 ? (won / played) * 100 : 0

	return (
		<Stack direction="row" p={2}>
			<Tooltip placement="left" title={'Win rate of ' + winRate.toFixed(2) + '%'}>
				<Stack alignItems="center" justifyContent="center">
					<StatisticProgress progress={winRate} />
				</Stack>
			</Tooltip>
			<Stack>
				<Typography variant="h5" px={2}>
					{name}
				</Typography>
				<Stack direction="row">
					<Statistic title="Victories" value={won} />
					<Statistic title="Defeats" value={played - won} />
				</Stack>
			</Stack>
		</Stack>
	)
}
