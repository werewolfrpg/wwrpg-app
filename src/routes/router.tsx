import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Leaderboard from '../pages/leaderboard'
import PlayerOverview from '../pages/player-overview'
import MatchOverview from '../pages/match-overview'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/leaderboard',
		element: <Leaderboard />
	},
	{
		path: '/overview/player/:minecraftId',
		element: <PlayerOverview />
	},
	{
		path: '/overview/match/:matchId',
		element: <MatchOverview />
	}
])
