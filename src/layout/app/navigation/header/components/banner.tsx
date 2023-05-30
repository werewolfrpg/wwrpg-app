import React from 'react'
import { ContentCopy } from '@mui/icons-material'
import { Box, Stack, Grow, Typography, Tooltip, styled } from '@mui/material'

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	padding: theme.spacing(5),
	gap: theme.spacing(2)
}))

export interface BannerProps {
	server: string
	version: string
	logo: NodeRequire | any
	wallpaper: NodeRequire | any
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
				<Grow in timeout={1000}>
					<Box component="img" src={logo} height="120px" />
				</Grow>
				<Stack direction="row" alignItems="center" gap={1}>
					<Typography fontFamily="Minecraft" variant="h3">
						{server} | {version}
					</Typography>
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
