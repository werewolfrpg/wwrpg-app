import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerStatistic } from '../../../types/player'
import { getPlayerStats } from '../../../apis/wwrpg'
import { PlayerMatches } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import MatchList from '../../history/components/matches-panel'
import RolePanel from './components/role-panel'
import OverviewPanel from './components/overview-panel'
import ProfilePanel from './components/profile-panel'
import ItemPanel from './components/item-panel'
import { Box, Grid, Tab, Tabs } from '@mui/material'

export default () => {
	const { minecraftId } = useParams<{ minecraftId: string }>()
	const [stats, setStats] = useState<PlayerStatistic | null>(null)
	const [matches, setMatches] = useState<PlayerMatches | null>(null)
	const [tab, setTab] = useState(0)

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
					<ProfilePanel stats={stats} />
				</Grid>
				<Grid item>
					<RolePanel roles={stats.roles} />
				</Grid>
			</Grid>
			<Grid container item spacing={2} xs={6} direction="column">
				<Grid item>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={tab} onChange={(_, i) => setTab(i)}>
							<Tab label="Overview" />
							<Tab label="Items" />
						</Tabs>
					</Box>
				</Grid>
				{tab == 0 ? (
					<>
						<Grid item>
							<OverviewPanel stats={stats} />
						</Grid>
						<Grid item>
							<MatchList matches={matches} />
						</Grid>
					</>
				) : (
					<Grid item>
						<ItemPanel items={stats.items} />
					</Grid>
				)}
			</Grid>
		</Grid>
	)
}
