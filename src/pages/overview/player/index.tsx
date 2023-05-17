import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerOverview } from '../../../types/overview'
import { getPlayerStats } from '../../../apis/wwrpg'
import { MatchOverview } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import { Divider } from '@mui/material'
import { DashboardRounded } from '@mui/icons-material'
import Panel from '../../../components/panel'
import MatchList from '../../../components/match-list'
import StatisticPanel from './components/statistic-panel'
import RolePanel from './components/role-panel'
import RankPanel from './components/rank-panel'

export default () => {
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
			<RankPanel score={stats.score} title="TODO" />
			<RolePanel roles={stats.gameStats} />
			<Panel title="Overview" icon={<DashboardRounded />}>
				<StatisticPanel
					title="Performance"
					statistics={[
						{
							title: 'Wins',
							value: stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
						},
						{
							title: 'Win %',
							value: (
								stats.gameStats.reduce((sum, { data }) => sum + data.played, 0) /
								stats.gameStats.reduce((sum, { data }) => sum + data.victories, 0)
							).toFixed(2)
						},
						{
							title: 'Matches Played',
							value: stats.gameStats.reduce((sum, { data }) => sum + data.played, 0)
						}
					]}
				/>
				<StatisticPanel
					statistics={[
						{
							title: 'Kills',
							value: stats.kills
						},
						{
							title: 'Deaths',
							value: stats.deaths
						},
						{
							title: 'K/D',
							value: (stats.kills / stats.deaths).toFixed(2)
						}
					]}
				/>
				<Divider />
				<StatisticPanel
					title="Skeletons Punished"
					statistics={[
						{
							title: 'Emeralds Collected',
							value: stats.skeletons.basicSkeletonEmeraldDrops
						},
						{
							title: 'Basic Killed',
							value: stats.skeletons.killedBasicSkeletons
						},
						{
							title: 'Special Killed',
							value: stats.skeletons.killedSpecialSkeletons
						}
					]}
				/>
			</Panel>
			<MatchList matches={matches} />
		</div>
	)
}
