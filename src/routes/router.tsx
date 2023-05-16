import { createBrowserRouter } from 'react-router-dom'
import Leaderboard from '../pages/leaderboard'
import Overview from '../pages/overview'
import Home from '../pages/home'

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
		path: '/overview',
		element: <Overview />
	}
])
