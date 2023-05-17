import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Leaderboard from '../pages/leaderboard'
import PlayerOverview from '../pages/overview/player'
import MatchOverview from '../pages/overview/match'

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
