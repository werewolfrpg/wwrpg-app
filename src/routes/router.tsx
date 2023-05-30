import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Leaderboard from '../pages/leaderboard'
import PlayerOverview from '../pages/overview/player'
import MatchOverview from '../pages/overview/match'
import History from '../pages/history'
import Gameplay from '../pages/gameplay'

export type RouteLink = {
	name: string
	path: string
}

export const headers = [
	{
		name: 'Home',
		path: '/',
		element: <Home />
	},
	{
		name: 'Gameplay',
		path: '/gameplay',
		element: <Gameplay />
	},
	{
		name: 'Leaderboard',
		path: '/leaderboard',
		element: <Leaderboard />
	},
	{
		name: 'Games',
		path: '/history',
		element: <History />
	}
]

export const routes = [
	...headers,
	{
		path: '/overview/player/:minecraftId',
		element: <PlayerOverview />
	},
	{
		path: '/overview/match/:matchId',
		element: <MatchOverview />
	}
]

export const router = createBrowserRouter(routes)
