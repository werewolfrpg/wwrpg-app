import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerStatistic } from '../../../types/player'
import { getPlayerStats } from '../../../apis/wwrpg'
import { PlayerMatches } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import { Box, Container, Grid, Tab, Tabs } from '@mui/material'
import RolePanel from './components/role-panel'
import OverviewPanel from './components/overview-panel'
import ProfilePanel from './components/profile-panel'
import ItemPanel from './components/item-panel'
import MatchesPanel from './components/matches-panel'
import AppLayout from '../../../layout/app'

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
		<AppLayout>
			<Container>
				<Box py={5}>
					<Grid container gap={4}>
						<Grid container item direction="column" xs={3} gap={3}>
							<Grid item>
								<ProfilePanel stats={stats} />
							</Grid>
							<Grid item>
								<RolePanel roles={stats.roles} />
							</Grid>
						</Grid>
						<Grid container item direction="column" xs /*gap={3}*/>
							<Grid item mb={3}>
								<Tabs value={tab} onChange={(_, i) => setTab(i)}>
									<Tab label="Overview" />
									<Tab label="Items" />
								</Tabs>
							</Grid>
							{tab == 0 ? (
								<>
									<Grid item>
										<OverviewPanel stats={stats} />
									</Grid>
									<Grid item>
										<MatchesPanel matches={matches} />
									</Grid>
								</>
							) : (
								<Grid item>
									<ItemPanel items={stats.items} />
								</Grid>
							)}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</AppLayout>
	)
}
