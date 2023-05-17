import { useEffect, useState } from 'react'
import { Leaderboard } from '../types/leaderboard'
import { getLeaderboard } from '../apis/wwrpg'
import { useNavigate } from 'react-router-dom'
import {
	Card,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
	Typography
} from '@mui/material'

export default () => {
	const navigate = useNavigate()

	const [page, setPage] = useState(0)
	const [count, setCount] = useState(20)
	const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)

	useEffect(() => {
		refreshLeaderboard(page, count)
	}, [])

	const refreshLeaderboard = (newPage: number, newCount: number) => {
		setPage(newPage)
		setCount(newCount)
		setLeaderboard(null)
		getLeaderboard(newPage + 1, newCount).then(setLeaderboard)
	}

	if (!leaderboard) {
		return <div>loading...</div>
	}

	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableCell align="left">Rank</TableCell>
					<TableCell align="left">Player</TableCell>
					<TableCell align="center">Title</TableCell>
					<TableCell align="center">Score</TableCell>
					<TableCell align="center">Win %</TableCell>
					<TableCell align="right">Matches Played</TableCell>
				</TableHead>
				<TableBody>
					{leaderboard.data.map(
						({ minecraftId, ranking, minecraftUsername, title, score, gamesWon, gamesPlayed }) => (
							<TableRow
								key={minecraftId}
								onClick={() => navigate('/overview/player/' + minecraftId)}
							>
								<TableCell align="left">{ranking}</TableCell>
								<TableCell align="left">
									<Stack direction="row" alignItems="center">
										<img src={'https://mc-heads.net/head/' + minecraftId} height={40} />
										<Typography fontWeight={900} p={2}>
											{minecraftUsername}
										</Typography>
									</Stack>
								</TableCell>
								<TableCell align="center">{title}</TableCell>
								<TableCell align="center">{score}</TableCell>
								<TableCell align="center">
									{gamesPlayed > 0 ? ((gamesWon / gamesPlayed) * 100).toFixed(1) + '%' : '--'}
								</TableCell>
								<TableCell align="right">{gamesPlayed}</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
				<TableFooter>
					<TablePagination
						style={{ border: 'none' }}
						rowsPerPageOptions={[20, 50, 100]}
						onPageChange={(_, page) => refreshLeaderboard(page, count)}
						onRowsPerPageChange={event => refreshLeaderboard(0, parseInt(event.target.value))}
						count={leaderboard.meta.entries * leaderboard.meta.totalPageNumber}
						rowsPerPage={count}
						page={page}
					/>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}
