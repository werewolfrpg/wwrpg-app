import React from 'react'
import { Box, Grow, Slide, Stack, Typography, styled } from '@mui/material'
import ServerLink, { ServerLinkProps } from '../../../components/server-link'

const Content = styled(Stack)({
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%'
})

export type WallpaperProps = ServerLinkProps & {
	server: string
	image: string
	logo: string
}

export default ({ image, logo, ...info }: WallpaperProps) => {
	return (
		<Box
			style={{
				backgroundImage: `url(${image}`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				height: '100vh'
			}}
		>
			<Grow in={true} timeout={1000}>
				<Content>
					<Typography variant="h1">This is the official ...</Typography>
					<Box component="img" src={logo} width="50%" my={5} />
					<Typography variant="h1">... website</Typography>
				</Content>
			</Grow>
			<ServerLink {...info} />
		</Box>
	)
}
