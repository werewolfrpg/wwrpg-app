import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GameStats, PlayerOverview } from '../types/overview'
import { getPlayerStats } from '../apis/wwrpg'
import { MatchOverview } from '../types/match'
import { getPlayerMatchHistory } from '../apis/wwrpg'
import {
	Box,
	Card,
	CircularProgress,
	Divider,
	LinearProgress,
	Stack,
	TableCell,
	TableRow,
	Tooltip,
	Typography
} from '@mui/material'
import Table from '../components/table'
import Statistic from '../components/statistic'
import Panel from '../components/panel'
import { AssignmentIndRounded, DashboardRounded, MilitaryTech } from '@mui/icons-material'

export default () => {
	const navigate = useNavigate()

	const { minecraftId } = useParams<{ minecraftId: string }>()
	const [stats, setStats] = useState<PlayerOverview | null>(null)
	const [matches, setMatches] = useState<MatchOverview[] | null>(null)

	useEffect(() => {
		if (minecraftId) {
			getPlayerStats(minecraftId).then(setStats).catch(console.error)
			getPlayerMatchHistory(minecraftId).then(setMatches).catch(console.error)
		} else {
			setStats(null)
			setMatches(null)
		}
	}, [minecraftId])

	if (!stats || !matches) {
		return <div>loading...</div>
	}

	return (
		<div>
			<Panel title="Rank" icon={<MilitaryTech />}>
				<Stack>
					<Box sx={{ py: 1 }}>
						<Statistic title={'Legendary'} value={stats.score.toFixed()} caption="Rank #24" />
					</Box>
					<Box position="relative" sx={{ p: 1, mx: 1 }}>
						<LinearProgress variant="determinate" value={40} sx={{ color: 'silver' }} />
						<Typography fontSize={12}>1234 until next rank</Typography>
					</Box>
				</Stack>
			</Panel>
			<Panel title="Roles" icon={<AssignmentIndRounded />}>
				{stats.gameStats
					.sort((a, b) => a.data.played / a.data.victories - b.data.played / b.data.victories)
					.map(RoleCard)}
			</Panel>
			<Panel title="Overview" icon={<DashboardRounded />}>
				<Typography variant="h4" sx={{ mx: 4, mt: 2 }}>
					Performance
				</Typography>
				<Box>
					<Stack direction="row">
						<StatisticCard
							title="Wins"
							value={stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0).toFixed()}
						/>
						<StatisticCard
							title="Win %"
							value={(
								stats.gameStats.reduce((sum, { data }) => sum + data.played, 0) /
								stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
							).toFixed()}
						/>
						<StatisticCard
							title="Matches Played"
							value={stats.gameStats.reduce((sum, { data }) => sum + data.played, 0).toFixed()}
						/>
					</Stack>
					<Stack direction="row">
						<StatisticCard title="Kills" value={stats.kills.toFixed()} />
						<StatisticCard title="Deaths" value={stats.deaths.toFixed()} />
						<StatisticCard
							title="K/D"
							value={
								stats.kills == 0 && stats.deaths == 0
									? '--'
									: (stats.kills / stats.deaths).toFixed(2)
							}
						/>
					</Stack>
				</Box>
				<Divider />
				<Box>
					<Typography variant="h4" sx={{ mx: 4, mt: 2 }}>
						Skeletons Punished
					</Typography>
					<Stack direction="row">
						<StatisticCard
							title="Emeralds Collected"
							value={stats.skeletons.basicSkeletonEmeraldDrops.toFixed()}
						/>
						<StatisticCard
							title="Basic Killed"
							value={stats.skeletons.killedBasicSkeletons.toFixed()}
						/>
						<StatisticCard
							title="Lucky Killed"
							value={stats.skeletons.killedLuckySkeletons.toFixed()}
						/>
						<StatisticCard
							title="Special Killed"
							value={stats.skeletons.killedSpecialSkeletons.toFixed()}
						/>
					</Stack>
				</Box>
			</Panel>
			<Table
				data={matches}
				count={matches.length}
				total={matches.length}
				headers={['Match History']}
				row={({ matchId, map, date, duration }) => (
					<TableRow key={matchId} onClick={() => navigate('/overview/match/' + matchId)}>
						<TableCell>
							<Typography variant="h3">{map}</Typography>
							<div>
								{date} - {duration}
							</div>
						</TableCell>
					</TableRow>
				)}
			/>
		</div>
	)
}

const RoleCard = ({ role, data: { victories, played } }: GameStats) => {
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

interface StatisticCardProps {
	title: string
	value: string
	caption?: string
}

const StatisticCard = ({ title, value, caption }: StatisticCardProps) => {
	return (
		<Card
			sx={{
				p: 1,
				minWidth: 200,
				borderWidth: 0,
				transition: 'ease 150ms',
				m: 1,
				flex: 1,
				':hover': {
					background: 'whitesmoke'
				}
			}}
		>
			<Statistic title={title} value={value} caption={caption} />
		</Card>
	)
}
