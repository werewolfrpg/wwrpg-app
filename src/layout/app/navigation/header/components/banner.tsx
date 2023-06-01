import React from 'react'
import { Box, Stack, styled } from '@mui/material'
import ServerLink, { ServerLinkProps } from '../../../../../components/server-link'

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	padding: theme.spacing(5)
}))

export type BannerProps = ServerLinkProps & {
	logo: string
	wallpaper: string
	container: React.MutableRefObject<HTMLElement | undefined>
}

export default ({ server, version, logo, wallpaper, container }: BannerProps) => {
	return (
		<Box
			ref={container}
			style={{
				backgroundImage: `url(${wallpaper}`,
				backgroundPosition: 'center',
				backgroundSize: 'cover'
			}}
		>
			<Content>
				<Box component="img" src={logo} height="120px" />
				<ServerLink server={server} version={version} />
			</Content>
		</Box>
	)
}
