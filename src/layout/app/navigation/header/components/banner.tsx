import React from 'react'
import { Box, Stack, styled } from '@mui/material'
import ServerLink, { ServerLinkProps } from '../../../../../components/server-link'

const Container = styled(Box)<{ image: string }>(({ image }) => ({
	backgroundImage: `url(${image})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover'
}))

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	padding: theme.spacing(5)
}))

export type BannerProps = ServerLinkProps & {
	logo: string
	wallpaper: string
	container: React.MutableRefObject<HTMLElement | undefined>
}

export default ({ server, version, logo, wallpaper, container }: BannerProps) => {
	return (
		<Container ref={container} image={wallpaper}>
			<Content>
				<Box component="img" src={logo} height="120px" />
				<ServerLink server={server} version={version} />
			</Content>
		</Container>
	)
}
