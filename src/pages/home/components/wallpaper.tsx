import React from 'react'
import { Box, Grow, Stack, Tooltip, Typography, styled } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'

const Content = styled(Stack)({
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%'
})

export interface WallpaperProps {
	server: string
	image: string
	logo: string
}

export default ({ image, logo, server }: WallpaperProps) => {
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
				<Stack direction="row" gap={1} m={1} zIndex={100}>
					<Typography variant="h3">{server}</Typography>
					<Tooltip title="Copy server address">
						<ContentCopy
							style={{ cursor: 'pointer', fontSize: 20 }}
							onClick={() => navigator.clipboard.writeText(server)}
						/>
					</Tooltip>
				</Stack>
			</Content>
		</Box>
	)
}
