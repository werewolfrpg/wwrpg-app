import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Card, Divider, Skeleton, Stack, TablePagination, Typography } from '@mui/material'
import { Leaderboard } from '../../../types/leaderboard'
import LeaderbaordRow from './leaderbaord-row'

export interface LeaderboardProps {
	page: number
	count: number
	leaderboard: Leaderboard | null
	onRefresh: (page: number, count: number) => void
}

export default ({ page, count, leaderboard, onRefresh }: LeaderboardProps) => {
	const navigate = useNavigate()

	if (!leaderboard) {
		const skeletons = []
		for (let i = 0; i < count; i++) {
			skeletons.push(<LeaderbaordRow key={i} light={i % 2 === 0} />)
		}

		return (
			<Card>
				<LeaderbaordRow values={['#', 'Player', 'Title', 'Score', 'Win %', 'Games Played']} />
				{skeletons}
				<LeaderbaordRow values={[<Skeleton width={120} />]} />
			</Card>
		)
	}

	return (
		<Card>
			<LeaderbaordRow values={['#', 'Player', 'Title', 'Score', 'Win %', 'Games Played']} />
			{leaderboard.data.map((player, index) => (
				<LeaderbaordRow
					onClick={() => navigate('/overview/player/' + player.minecraftId)}
					key={index}
					light={index % 2 === 0}
					values={[
						player.rank,
						<Stack direction="row" alignItems="center" gap={2}>
							<Box component="img" src={'https://mc-heads.net/head/' + player.minecraftId} height={40} />
							<Divider style={{ color: 'white' }} orientation="vertical" />
							<Typography variant="h4">{player.username}</Typography>
						</Stack>,
						player.title,
						player.score,
						player.played > 0 ? ((player.won / player.played) * 100).toFixed(1) + '%' : '--',
						player.played
					]}
				/>
			))}
			<TablePagination
				style={{ border: 'none' }}
				rowsPerPageOptions={[20, 50, 100]}
				onPageChange={(_, page) => onRefresh(page, count)}
				onRowsPerPageChange={event => onRefresh(0, parseInt(event.target.value))}
				count={(leaderboard?.meta.entries ?? 0) * (leaderboard?.meta.totalPageNumber ?? 0)}
				rowsPerPage={count}
				page={page}
			/>
		</Card>
	)
}
