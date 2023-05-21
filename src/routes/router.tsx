import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Leaderboard from '../pages/leaderboard'
import PlayerOverview from '../pages/overview/player'
import MatchOverview from '../pages/overview/match'
import History from '../pages/history'
import Gameplay from '../pages/gameplay'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/gameplay',
		element: <Gameplay />
	},
	{
		path: '/leaderboard',
		element: <Leaderboard />
	},
	{
		path: '/history',
		element: <History />
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
