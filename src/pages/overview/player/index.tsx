import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerStatistic } from '../../../types/player'
import { getPlayerStats } from '../../../apis/wwrpg'
import { PlayerMatches } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import { Box, Card, Container, Grid, Tab, Tabs } from '@mui/material'
import FactionPanel from './components/faction-panel'
import OverviewPanel from './components/overview-panel'
import ProfilePanel from './components/profile-panel'
import ItemPanel from './components/item-panel'
import MatchPanel from './components/match-panel'
import AppLayout from '../../../layout/app'

export default () => {
	const { minecraftId } = useParams<{ minecraftId: string }>()
	const [stats, setStats] = useState<PlayerStatistic | undefined>()
	const [matches, setMatches] = useState<PlayerMatches | undefined>()
	const [tab, setTab] = useState(0)

	useEffect(() => {
		if (minecraftId) {
			getPlayerStats(minecraftId).then(setStats).catch(console.error)
			getPlayerMatchHistory(minecraftId).then(setMatches).catch(console.error)
		} else {
			setStats(undefined)
			setMatches(undefined)
		}
	}, [minecraftId])

	return (
		<AppLayout>
			<Container>
				<Box py={5}>
					<Grid container gap={stats ? 4 : 6}>
						<Grid container item direction="column" xs={3} gap={3}>
							<Grid item>
								<ProfilePanel stats={stats} />
							</Grid>
							<Grid item>
								<FactionPanel factions={stats?.factions} />
							</Grid>
						</Grid>
						<Grid container item direction="column" xs gap={stats ? 0 : 3}>
							<Grid item mb={stats ? 3 : 0}>
								<Card>
									<Tabs value={tab} onChange={(_, i) => setTab(i)}>
										<Tab label="Overview" />
										<Tab label="Items" />
									</Tabs>
								</Card>
							</Grid>
							{tab === 0 ? (
								<>
									<Grid item>
										<OverviewPanel stats={stats} />
									</Grid>
									<Grid item>
										<MatchPanel matches={matches} />
									</Grid>
								</>
							) : (
								<Grid item>
									<ItemPanel items={stats?.items} />
								</Grid>
							)}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</AppLayout>
	)
}
