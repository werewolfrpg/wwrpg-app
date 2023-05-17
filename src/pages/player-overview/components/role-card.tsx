import { Stack, Tooltip, Box, CircularProgress } from '@mui/material'
import { GameStats } from '../../../types/overview'
import Statistic from './statistic'

export default ({ role, data: { victories, played } }: GameStats) => {
	const winRate = (victories / played) * 100

	return (
		<Stack key={role} direction="row" sx={{ p: 2 }}>
			<Tooltip title={'Win rate: ' + winRate.toFixed() + '%'}>
				<Box position="relative" alignItems="center" justifyContent="center" display="flex">
					<CircularProgress
						variant="determinate"
						thickness={5}
						value={100}
						size={50}
						sx={{ px: 1, color: 'silver' }}
					/>
					<CircularProgress
						variant="determinate"
						thickness={5}
						value={winRate}
						size={50}
						sx={{ px: 1, position: 'absolute', left: 0 }}
					/>
				</Box>
			</Tooltip>
			<Statistic
				title={role[0] + role.toLowerCase().substring(1)}
				value={victories + 'W - ' + (played - victories) + 'L'}
			/>
		</Stack>
	)
}
