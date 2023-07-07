import React from 'react'
import AppLayout from '../../layout/app'
import Wallpaper from './components/wallpaper'
import { Box, Container, Typography } from '@mui/material'

export default () => {
	return (
		<AppLayout>
			<Wallpaper
				image={require('../../assets/images/wallpaper.png')}
				logo={require('../../assets/images/logo.png')}
				server="aesten.net:25588"
				version="1.19"
			/>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					What is the WWRPG Minigame?
				</Typography>
				<Container>
					<Box py={5}>
						<Typography>Where liars thrive and friendships break.</Typography>
					</Box>
				</Container>
			</Box>
		</AppLayout>
	)
}
