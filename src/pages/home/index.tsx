import React from 'react'
import AppLayout from '../../layout/app'
import Wallpaper from './components/wallpaper'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<AppLayout>
			<Wallpaper
				image={require('../../assets/images/wallpaper.png')}
				logo={require('../../assets/images/logo.png')}
				server="aesten.net:25588"
				version="1.19"
			/>
			<Container>
				<Typography variant="h1" align="center" my={8}>
					What is the WWRPG Minigame?
				</Typography>
				<Box py={5}>
					<Typography variant="h4" lineHeight={2}>
						Discover the fantastical world of Werewolf RPG (WWRPG), a Minecraft minigame plugin inspired by the Werewolf
						Game. Engage in epic battles between villagers and werewolves, with additional factions vying for victory.
						Strategy, skill, and cooperation are crucial, but beware of deception and broken alliances. Join the
						dramatic disputes and unleash your forceful nature in this captivating realm.
					</Typography>
				</Box>
				<Typography variant="h1" align="center" my={8}>
					How to play?
				</Typography>
				<Box py={5}>
					<Typography variant="h4" lineHeight={2}>
						Choose your path in the enchanted realm of Werewolf RPG. Install it on your own server or join our thrilling
						sessions.
					</Typography>
					<Typography variant="h4" lineHeight={2}>
						To play on our server, simply join our{' '}
						<Link
							to="https://discord.gg/KChK7wfuyF"
							target="_blank"
							style={{ textDecoration: 'underline', color: 'white' }}
						>
							Discord
						</Link>{' '}
						and register using the minigame's bot in the #info channel.
					</Typography>
					<Typography variant="h4" lineHeight={2}>
						During our hosted sessions, the bot will manage player muting, and your game statistics will be stored and
						accessible on our website.
					</Typography>
					<Typography variant="h4" lineHeight={2} mb={8}>
						For a deeper understanding of the captivating{' '}
						<Link to="/gameplay" target="_blank" style={{ textDecoration: 'underline', color: 'white' }}>
							Gameplay
						</Link>
						, visit the designated tab or don't hesitate to ask.
					</Typography>
				</Box>
			</Container>
		</AppLayout>
	)
}
