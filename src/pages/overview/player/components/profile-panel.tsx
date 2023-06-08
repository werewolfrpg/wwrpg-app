import React from 'react'
import {
	Stack,
	Box,
	Typography,
	Divider,
	Card,
	Tooltip,
	LinearProgress,
	Skeleton,
	linearProgressClasses,
	styled,
	Grid
} from '@mui/material'
import { PlayerStatistic } from '../../../../types/player'
import Statistic from './statistic'

const PointProgress = styled(LinearProgress)(({ theme }) => ({
	height: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.text.secondary
	},
	[`& .${linearProgressClasses.bar}`]: {
		backgroundColor: theme.palette.primary.main
	}
}))

export interface ProfilePanelProps {
	stats?: PlayerStatistic
}

export default ({ stats }: ProfilePanelProps) => {
	if (!stats) {
		return (
			<Card>
				<Stack p={2} justifyContent="center" alignItems="center">
					<Typography variant="h4" fontSize={25}>
						<Skeleton width={100} />
					</Typography>
					<Typography variant="h5" color="yellow">
						<Skeleton width={80} />
					</Typography>
				</Stack>
				<Divider />
				<Stack direction="row" justifyContent="center" py={2} gap={3}>
					<Stack justifyContent="space-around" gap={2}>
						<Statistic />
						<Statistic />
					</Stack>
				</Stack>
				<PointProgress value={0} variant="determinate" />
				<Stack direction="row" justifyContent="center" alignItems="center" p={2}>
					<Skeleton width="100%" />
				</Stack>
			</Card>
		)
	}

	return (
		<Card>
			<Stack p={2} justifyContent="center" alignItems="center">
				<Typography variant="h4" fontSize={25}>
					{stats.username}
				</Typography>
			</Stack>
			<Divider />
			<Stack direction="row" justifyContent="center" py={2} gap={3}>
				<Box component="img" src={'https://mc-heads.net/body/' + stats.minecraftId} height={180} width={75} />
				<Stack justifyContent="space-around" gap={2}>
					<Statistic title="Rank" value={'#' + stats.rank} />
					<Statistic title="Points" value={stats.score.current} />
				</Stack>
			</Stack>
			<Tooltip
				placement="bottom"
				title={
					stats.title.next
						? stats.score.difference + ' points needed to reach ' + stats.title.next.name
						: 'Max level reached!'
				}
			>
				<Box>
					<PointProgress value={stats.score.progress} variant="determinate" />
					<Grid container direction="row" justifyContent="space-between" alignItems="center" p={2}>
						<Grid item xs>
							<Box display="flex" justifyContent="flex-start">
								<Typography variant="h5" color={stats.title.current.color}>
									{stats.title.current.name}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs>
							<Box display="flex" justifyContent="center">
								<Typography variant="caption">
									{stats.title.next ? stats.score.progress.toFixed(0) + '%' : '100% Completed'}
								</Typography>
							</Box>
						</Grid>
						{stats.title.next && (
							<Grid item xs>
								<Box display="flex" justifyContent="flex-end">
									<Typography variant="h5" color={stats.title.next.color}>
										{stats.title.next.name}
									</Typography>
								</Box>
							</Grid>
						)}
					</Grid>
				</Box>
			</Tooltip>
		</Card>
	)
}
