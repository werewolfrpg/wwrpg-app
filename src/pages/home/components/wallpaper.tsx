import React from 'react'
import { Box, Grow, Stack, Typography, styled } from '@mui/material'
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
				height: 'calc(100vh - 80px)'
			}}
		>
			<Content>
				<Typography variant="h1" m={3}>
					Welcome To
				</Typography>
				<Grow in={true} timeout={1000}>
					<Box component="img" src={logo} width="50%" />
				</Grow>
				<ServerLink {...info} />
			</Content>
		</Box>
	)
}
