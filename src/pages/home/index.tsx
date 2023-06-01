import React from 'react'
import AppLayout from '../../layout/app'
import Wallpaper from './components/wallpaper'

export default () => {
	return (
		<AppLayout>
			<Wallpaper
				image={require('../../assets/images/wallpaper.png')}
				logo={require('../../assets/images/logo.png')}
				server="wwrpg.aesten.net"
				version="1.19.2"
			/>
		</AppLayout>
	)
}
