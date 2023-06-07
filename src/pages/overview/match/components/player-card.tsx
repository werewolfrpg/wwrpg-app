import { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Box, Grid, Hidden, Modal, Skeleton, Stack, Typography } from '@mui/material'
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
				<Hidden smDown>
					<Grid item xs={3} sm={2}>
						<Statistic />
					</Grid>
				</Hidden>
				<Grid item xs={3} sm={2}>
					<Statistic />
				</Grid>
				<Hidden mdDown>
					<Grid item xs>
						<Statistic />
					</Grid>
				</Hidden>
			</Grid>
		)
	}

	return (
		<Box bgcolor={light ? 'background.default' : 'background.paper'}>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				onClick={() => setShow(!show)}
				style={{ cursor: 'pointer' }}
				p={2}
			>
				<Grid item xs alignSelf="center">
					<LeaderboardPlayer
						username={player.username}
						minecraftId={player.minecraftId}
						caption={
							<Typography variant="caption" color={player.role.color}>
								{player.role.name}
							</Typography>
						}
					/>
				</Grid>
				<Hidden smDown>
					<Grid item xs={3} sm={2}>
						<Statistic title="Kills" value={player.kills} />
					</Grid>
				</Hidden>
				<Grid item xs={3} sm={2}>
					<Statistic title="Score" value={'+' + player.score} />
				</Grid>
				<Hidden mdDown>
					<Grid item xs>
						<Statistic title="Death Cause" value={player?.death ?? '--'} color={player.death && 'red'} />
					</Grid>
				</Hidden>
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
