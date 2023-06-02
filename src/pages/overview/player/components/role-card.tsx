import { Stack, Tooltip } from '@mui/material'
import { Role } from '../../../../types/player'
import Statistic from './statistic'
import StatisticProgress from './statistic-progress'

export interface RoleCardProps {
	role: Role
}

export default ({ role: { name, played, won } }: RoleCardProps) => {
	const winRate = played > 0 ? (won / played) * 100 : 0

	return (
		<Tooltip title={'Win rate: ' + winRate.toFixed() + '%'}>
			<Stack direction="row" sx={{ p: 2 }}>
				<StatisticProgress progress={winRate} />
				<Statistic title={name[0] + name.toLowerCase().substring(1)} value={won + 'W - ' + (played - won) + 'L'} />
			</Stack>
		</Tooltip>
	)
}
