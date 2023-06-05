import { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Box, Grid, Modal, Skeleton, Stack } from '@mui/material'
import PlayerModal from './player-modal'
import LeaderboardPlayer from '../../../leaderboard/components/leaderboard-player'
import Statistic from '../../player/components/statistic'

export interface PlayerCardProps {
	player?: MatchPlayer
	light?: boolean
}

export default ({ player, light }: PlayerCardProps) => {
	const [show, setShow] = useState(false)

	if (!player) {
		return (
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				bgcolor={light ? 'background.default' : 'background.paper'}
				p={2}
			>
				<Grid item xs alignSelf="center">
					<Stack direction="row" alignItems="center" gap={3}>
						<Skeleton width={40} height={40} variant="circular" />
						<Skeleton width={100} />
					</Stack>
				</Grid>
				<Grid item xs>
					<Statistic />
				</Grid>
				<Grid item xs={2}>
					<Statistic />
				</Grid>
				<Grid item xs={1}>
					<Statistic />
				</Grid>
				<Grid item xs={1}>
					<Statistic />
				</Grid>
			</Grid>
		)
	}

	return (
		<Box style={{ cursor: 'pointer' }}>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				bgcolor={light ? 'background.default' : 'background.paper'}
				onClick={() => setShow(!show)}
				p={2}
			>
				<Grid item xs alignSelf="center">
					<LeaderboardPlayer username={player.username} minecraftId={player.minecraftId} />
				</Grid>
				<Grid item xs>
					<Statistic title="Death Cause" value={player?.death ?? '--'} color={player.death && 'red'} />
				</Grid>
				<Grid item xs={2}>
					<Statistic title="Role" value={player.role.name} color={player.role.color} />
				</Grid>
				<Grid item xs={1}>
					<Statistic title="Kills" value={player.kills} />
				</Grid>
				<Grid item xs={1}>
					<Statistic title="Score" value={'+' + player.score} />
				</Grid>
			</Grid>
			<Modal
				open={show}
				onClose={() => setShow(false)}
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				disableAutoFocus
			>
				<PlayerModal player={player} />
			</Modal>
		</Box>
	)
}
