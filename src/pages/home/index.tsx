import React from 'react'
import AppLayout from '../../layout/app'
import Wallpaper from './components/wallpaper'
import { Box, Typography } from '@mui/material'

export default () => {
	return (
		<AppLayout>
			<Wallpaper
				image={require('../../assets/images/wallpaper.png')}
				logo={require('../../assets/images/logo.png')}
				server="wwrpg.aesten.net"
				version="1.19.2"
			/>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					What is the WWRPG Minigame?
				</Typography>
			</Box>
		</AppLayout>
	)
}
