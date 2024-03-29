import React, { useState } from 'react'
import { Box, Card, Pagination, Skeleton, Typography } from '@mui/material'
import { Leaderboard } from '../../../types/leaderboard'
import LeaderboardRow from './leaderboard-row'
import LeaderboardPlayer from './leaderboard-player'
import { Link } from 'react-router-dom'

export interface LeaderboardProps {
	leaderboard: Leaderboard | null
	onRefresh: (page: number, count: number) => void
}

export default ({ leaderboard, onRefresh }: LeaderboardProps) => {
	const [page, setPage] = useState(1)
	const [count] = useState(10)

	const handleChange = (_: React.ChangeEvent<any>, newPage: number) => {
		onRefresh(newPage, count)
		setPage(newPage)
	}

	if (!leaderboard) {
		const skeletons = []
		for (let i = 0; i < count; i++) {
			skeletons.push(<LeaderboardRow key={i} light={i % 2 === 0} />)
		}

		return (
			<Card>
				<LeaderboardRow values={['#', 'Player', 'Title', 'Score', 'Win %', 'Games Played']} />
				{skeletons}
				<LeaderboardRow values={[<Skeleton width={120} />]} />
			</Card>
		)
	}

	return (
		<Card>
			<LeaderboardRow values={['#', 'Player', 'Score', 'Win %', 'Games Played']} />
			{leaderboard.data.map(({ rank, username, minecraftId, title, score, played, won }, index) => (
				<Link to={'/overview/player/' + minecraftId} style={{ textDecoration: 'none', color: 'inherit' }}>
					<LeaderboardRow
						key={index}
						light={index % 2 === 0}
						values={[
							rank,
							<LeaderboardPlayer
								{...{ username, minecraftId }}
								caption={
									<Typography variant="h5" color={title.color}>
										{title.name}
									</Typography>
								}
							/>,
							score,
							played > 0 ? ((won / played) * 100).toFixed(1) + '%' : '--',
							played
						]}
					/>
				</Link>
			))}
			<Box p={2}>
				<Pagination page={page} count={leaderboard.meta.totalPageNumber} onChange={handleChange} />
			</Box>
		</Card>
	)
}
