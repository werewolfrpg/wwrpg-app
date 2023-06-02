import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Card, Divider, Grid, Hidden, Skeleton, Stack, TablePagination, Typography } from '@mui/material'
import { Leaderboard } from '../../../types/leaderboard'

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
		for (let i = 0; i < 3; i++) {
			skeletons.push(
				<Row
					light={i % 2 === 0}
					values={[
						<Skeleton width={20} />,
						<Stack direction="row" alignItems="center" gap={2}>
							<Skeleton width={40} height={40} variant="circular" />
							<Skeleton width={100} />
						</Stack>,
						<Skeleton width={60} />,
						<Skeleton width={40} />,
						<Skeleton width={40} />,
						<Skeleton width={30} />
					]}
				/>
			)
		}

		return (
			<Card>
				<Row values={['#', 'Player', 'Title', 'Score', 'Win %', 'Games Played']} />
				{skeletons}
				<Row values={[<Skeleton width={120} />]} />
			</Card>
		)
	}

	return (
		<Card>
			<Row values={['#', 'Player', 'Title', 'Score', 'Win %', 'Games Played']} />
			{leaderboard.data.map((player, index) => (
				<Row
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
				count={leaderboard.meta.entries * leaderboard.meta.totalPageNumber}
				rowsPerPage={count}
				page={page}
			/>
		</Card>
	)
}

const Row = ({
	values,
	light = false,
	onClick
}: {
	values: (string | React.ReactNode)[]
	light?: boolean
	onClick?: () => unknown
}) => {
	const [rank, player, title, score, win, matches] = values

	return (
		<Grid
			container
			onClick={onClick}
			style={{ cursor: onClick ? 'pointer' : 'inherit' }}
			bgcolor={light ? 'background.default' : 'background.paper'}
			p={2}
		>
			<Grid item justifySelf="center" alignSelf="center" xs={1}>
				{rank}
			</Grid>
			<Grid item justifySelf="center" alignSelf="center" xs>
				{player}
			</Grid>
			<Hidden smDown>
				<Grid item justifySelf="center" alignSelf="center" xs={2}>
					<Stack alignItems="center">{title}</Stack>
				</Grid>
				<Grid item justifySelf="center" alignSelf="center" xs={1}>
					<Stack alignItems="center">{score}</Stack>
				</Grid>
			</Hidden>
			<Grid item justifySelf="center" alignSelf="center" xs={1}>
				<Stack alignItems="center">{win}</Stack>
			</Grid>
			<Hidden smDown>
				<Grid item justifySelf="center" alignSelf="center" xs={2}>
					<Stack alignItems="end">{matches}</Stack>
				</Grid>
			</Hidden>
		</Grid>
	)
}
