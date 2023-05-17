import { useEffect, useState } from 'react'
import { Leaderboard } from '../types/leaderboard'
import { getLeaderboard } from '../apis/wwrpg'
import { useNavigate } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'
import Table from '../components/table'

export default () => {
	const navigate = useNavigate()

	const [page, setPage] = useState(0)
	const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)

	useEffect(() => {
		refreshLeaderboard(0)
	}, [])

	const refreshLeaderboard = (newPage: number) => {
		setPage(newPage)
		setLeaderboard(null)
		getLeaderboard(page + 1, 20)
			.then(setLeaderboard)
			.catch(console.error)
	}

	if (!leaderboard) {
		return <div>loading...</div>
	}

	return (
		<Table
			data={leaderboard.data}
			count={20}
			total={leaderboard.meta.entries}
			headers={['Rank', 'Player', 'Title', 'Score', 'Win %', 'Match Player']}
			row={({ minecraftId, minecraftUsername, rank, score, gamesWon, gamesPlayed }, i) => (
				<TableRow key={minecraftId} onClick={() => navigate('/overview/player/' + minecraftId)}>
					<TableCell align="center">{page * 20 + i + 1}</TableCell>
					<TableCell align="left">{minecraftUsername}</TableCell>
					<TableCell align="center">{rank}</TableCell>
					<TableCell align="center">{score}</TableCell>
					<TableCell align="center">{(gamesWon / gamesPlayed) * 100 + '%'}</TableCell>
					<TableCell align="right">{gamesPlayed}</TableCell>
				</TableRow>
			)}
		/>
	)
}
