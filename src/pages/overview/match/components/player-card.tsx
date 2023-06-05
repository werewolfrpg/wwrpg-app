import { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Box, Grid, Modal } from '@mui/material'
import PlayerModal from './player-modal'
import LeaderboardPlayer from '../../../leaderboard/components/leaderboard-player'
import Statistic from '../../player/components/statistic'

export interface PlayerCardProps {
	player: MatchPlayer
	light?: boolean
}

export default ({ player, light }: PlayerCardProps) => {
	const [show, setShow] = useState(false)

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
					<Statistic title="Role" value={player.role.name} color={player.role.color} />
				</Grid>
				<Grid item xs>
					<Statistic title="Kills" value={player.kills} />
				</Grid>
				<Grid item xs>
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
