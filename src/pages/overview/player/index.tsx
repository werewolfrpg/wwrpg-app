import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerStatistic } from '../../../types/player'
import { getPlayerStats } from '../../../apis/wwrpg'
import { PlayerMatches } from '../../../types/match'
import { getPlayerMatchHistory } from '../../../apis/wwrpg'
import { Box, Card, Container, Grid, Stack, Tab, Tabs, styled } from '@mui/material'
import RolePanel from './components/role-panel'
import OverviewPanel from './components/overview-panel'
import ProfilePanel from './components/profile-panel'
import ItemPanel from './components/item-panel'
import MatchesPanel from './components/matches-panel'
import AppLayout from '../../../layout/app'

const TabButton = styled(Tab)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textTransform: 'none',
	fontWeight: 'bold',
	fontSize: 18,
	'&.Mui-selected': {
		color: '#fff'
	}
}))

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
								<RolePanel roles={stats?.roles} />
							</Grid>
						</Grid>
						<Grid container item direction="column" xs gap={matches ? 0 : 3}>
							<Grid item mb={matches ? 3 : 0}>
								<Card>
									<Stack direction="row">
										<Tabs value={tab} onChange={(_, i) => setTab(i)} TabIndicatorProps={{ style: { height: 4 } }}>
											<TabButton label="Overview" />
											<TabButton label="Items" />
										</Tabs>
									</Stack>
								</Card>
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
