import { useState } from 'react'
import { MatchPlayer } from '../../../../types/match'
import { Box, Card, Modal, Stack } from '@mui/material'
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
		<Box>
			<Card onClick={() => setShow(!show)}>
				<Stack direction="row" bgcolor={light ? 'background.default' : 'background.paper'} p={2}>
					<LeaderboardPlayer username={player.username} minecraftId={player.minecraftId} />
					<Statistic title="Kills" value={player.kills} />
					<Statistic title="Score" value={'+' + player.score} />
				</Stack>
			</Card>
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
