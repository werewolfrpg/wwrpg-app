import { useEffect, useState } from 'react'
import LeaderboardTable from './components/leaderboard-table'
import AppLayout from '../../layout/app'
import { Box, Container } from '@mui/material'
import { getLeaderboard } from '../../apis/wwrpg'
import { Leaderboard } from '../../types/leaderboard'

export default () => {
	const [page, setPage] = useState(0)
	const [count, setCount] = useState(20)
	const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)

	useEffect(() => {
		onRefresh(page, count)
	}, [])

	const onRefresh = (newPage: number, newCount: number) => {
		setPage(newPage)
		setCount(newCount)
		setLeaderboard(null)
		getLeaderboard(newPage + 1, newCount).then(setLeaderboard)
	}

	return (
		<AppLayout>
			<Container>
				<Box py={5}>
					<LeaderboardTable {...{ page, count, leaderboard, onRefresh }} />
				</Box>
			</Container>
		</AppLayout>
	)
}
