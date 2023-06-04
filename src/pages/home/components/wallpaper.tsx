import React from 'react'
import { Box, Grow, Stack, styled } from '@mui/material'
import ServerLink, { ServerLinkProps } from '../../../components/server-link'

const Container = styled(Stack)<{ image: string }>(({ image }) => ({
	backgroundImage: `url(${image}`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '100vh'
}))

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
					<Box component="img" src={logo} width="40%" my={5} />
					<Box mt={5}>
						<ServerLink {...info} />
					</Box>
				</Content>
			</Grow>
		</Box>
	)
}
