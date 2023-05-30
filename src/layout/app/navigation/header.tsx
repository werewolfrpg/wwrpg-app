import React, { useLayoutEffect, useRef, useState } from 'react'
import { Box, Container, Grow, Stack, Tooltip, Typography, styled } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../../routes/router'

const Header = styled(Box)(({ theme }) => ({
	background: theme.palette.background.paper,
	width: '100vw',
	zIndex: 1000,
	top: 0
}))

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'space-between',
	transition: '300ms ease',
	marginLeft: theme.spacing(10),
	marginRight: theme.spacing(10),
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3)
}))

const Link = styled(Typography)({
	color: 'white',
	fontSize: 20,
	cursor: 'pointer',
	fontFamily: 'Minecraft Ten',
	transition: '300ms ease',
	'&:hover': {
		lineHeight: 1,
		textDecoration: 'underline',
		textUnderlineOffset: 5,
		textDecorationThickness: 3
	}
})

export default () => {
	const navigate = useNavigate()
	const [showBanner, setShowBanner] = useState(false)
	const banner = useRef<HTMLElement>()
	const container = useRef<HTMLElement>()

	useLayoutEffect(() => {
		updateShowBanner()
		document.addEventListener('scroll', updateShowBanner)
		return () => document.removeEventListener('scroll', updateShowBanner)
	}, [])

	const updateShowBanner = () => {
		setShowBanner(document.documentElement.scrollTop > banner.current!.clientHeight)
	}

	return (
		<>
			<Banner
				server="wwrpg.aesten.net"
				version="1.19.2"
				logo={require('../../../assets/images/logo.png')}
				wallpaper={require('../../../assets/images/wallpaper.png')}
				container={banner}
			/>
			<Header ref={container} position={showBanner ? 'fixed' : 'relative'}>
				<Container>
					<Content direction="row">
						{headers.map((header, index) => (
							<Link key={index} onClick={() => navigate(header.path)}>
								{header.name}
							</Link>
						))}
					</Content>
				</Container>
			</Header>
			{showBanner && <Box height={container.current?.clientHeight} />}
		</>
	)
}

const Banner = ({
	server,
	version,
	logo,
	wallpaper,
	container
}: {
	server: string
	version: string
	logo: NodeRequire | any
	wallpaper: NodeRequire | any
	container: React.MutableRefObject<HTMLElement | undefined>
}) => {
	return (
		<Box
			ref={container}
			style={{
				backgroundImage: `url(${wallpaper}`,
				backgroundPosition: 'center',
				backgroundSize: 'cover'
			}}
		>
			<Stack justifyContent="center" alignItems="center" width="100vw" p={5} gap={2}>
				<Grow in timeout={1000}>
					<Box component="img" src={logo} height="120px" />
				</Grow>
				<Stack direction="row" gap={1} alignItems="center">
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
			</Stack>
		</Box>
	)
}
