import { MutableRefObject, useLayoutEffect, useRef, useState } from 'react'
import { Box, Container, Grow, Stack, Typography, styled } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = styled(Box)(({ theme }) => ({
	background: theme.palette.background.paper,
	width: '100vw',
	zIndex: 1000
}))

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'space-between',
	transition: '300ms ease',
	marginLeft: theme.spacing(10),
	marginRight: theme.spacing(10),
	padding: theme.spacing(1)
}))

const Link = styled(Typography)({
	color: 'white',
	cursor: 'pointer',
	fontFamily: 'Minecraft Ten',
	transition: 'line-height 300ms ease',
	padding: 10,
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
		const listener = (_: Event) => {
			setShowBanner(document.documentElement.scrollTop > banner.current!.clientHeight)
		}
		document.addEventListener('scroll', listener)

		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [])

	return (
		<>
			<Banner
				server="wwrpg.aesten.net"
				logo={require('../../../assets/images/logo.png')}
				wallpaper={require('../../../assets/images/wallpaper.png')}
				container={banner}
			/>
			<Header ref={container} position={showBanner ? 'fixed' : 'relative'} top={showBanner ? 0 : 'auto'}>
				<Container>
					<Content direction="row">
						<Link fontSize={20} onClick={() => navigate('/')}>
							Home
						</Link>
						<Link fontSize={20} onClick={() => navigate('/gameplay')}>
							Gameplay
						</Link>
						<Link fontSize={20} onClick={() => navigate('/leaderboard')}>
							Leaderboard
						</Link>
						<Link fontSize={20} onClick={() => navigate('/history')}>
							Games
						</Link>
					</Content>
				</Container>
			</Header>
			{showBanner && <Box height={container.current?.clientHeight} />}
		</>
	)
}

const Banner = ({
	server,
	logo,
	wallpaper,
	container
}: {
	server: string
	logo: NodeRequire | any
	wallpaper: NodeRequire | any
	container: MutableRefObject<HTMLElement | undefined>
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
				<Stack direction="row" gap={1}>
					<Typography fontFamily="Minecraft" variant="h3">
						{server}
					</Typography>
					<ContentCopy onClick={() => navigator.clipboard.writeText(server)} style={{ cursor: 'pointer' }} />
				</Stack>
			</Stack>
		</Box>
	)
}
