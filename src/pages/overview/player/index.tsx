import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerOverview } from '../../../types/overview'
import { getPlayerStats } from '../../../apis/wwrpg'
import { MatchOverview } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import MatchList from '../../../components/match-list'
import RolePanel from './components/role-panel'
import RankPanel from './components/rank-panel'
import OverviewPanel from './components/overview-panel'
import { Grid } from '@mui/material'

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
		<Grid container spacing={4} justifyContent="center">
			<Grid container item spacing={2} xs={2} direction="column">
				<Grid item>
					<RankPanel score={stats.score} title="TODO" />
				</Grid>
				<Grid item>
					<RolePanel roles={stats.gameStats} />
				</Grid>
			</Grid>
			<Grid container item spacing={2} xs={6} direction="column">
				<Grid item>
					<OverviewPanel stats={stats} />
				</Grid>
				<Grid item>
					<MatchList matches={matches} />
				</Grid>
			</Grid>
		</Grid>
	)
}
