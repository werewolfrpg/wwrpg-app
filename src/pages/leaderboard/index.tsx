import { useEffect, useState } from 'react'
import LeaderboardTable from './components/leaderboard-table'
import AppLayout from '../../layout/app'
import { Box, Container } from '@mui/material'
import { getLeaderboard } from '../../apis/wwrpg'
import { Leaderboard } from '../../types/leaderboard'

export default () => {
	const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)

	useEffect(() => {
		onRefresh(1)
	}, [])

	const onRefresh = (page: number, count: number = 10) => {
		setLeaderboard(null)
		getLeaderboard(page, count).then(setLeaderboard)
	}

	return (
		<AppLayout>
			<Container>
				<Box py={5}>
					<LeaderboardTable {...{ leaderboard, onRefresh }} />
				</Box>
			</Container>
		</AppLayout>
	)
}
