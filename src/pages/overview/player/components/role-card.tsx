import { Stack, Tooltip, Box, CircularProgress } from '@mui/material'
import { Role } from '../../../../types/player'
import Statistic from './statistic'

export interface RoleCardProps {
	role: Role
}

export default ({ role: { name, played, won } }: RoleCardProps) => {
	const winRate = played > 0 ? (won / played) * 100 : 0

	return (
		<Stack direction="row" sx={{ p: 2 }}>
			<Tooltip title={'Win rate: ' + winRate.toFixed() + '%'}>
				<Box position="relative" alignItems="center" justifyContent="center" display="flex">
					<CircularProgress variant="determinate" thickness={5} value={100} size={50} sx={{ px: 1, color: 'silver' }} />
					<CircularProgress
						variant="determinate"
						thickness={5}
						value={winRate}
						size={50}
						sx={{ px: 1, position: 'absolute', left: 0 }}
					/>
				</Box>
			</Tooltip>
			<Statistic title={name[0] + name.toLowerCase().substring(1)} value={won + 'W - ' + (played - won) + 'L'} />
		</Stack>
	)
}
