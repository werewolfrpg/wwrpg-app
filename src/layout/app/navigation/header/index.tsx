import { useLayoutEffect, useRef, useState } from 'react'
import { Box, Container, Stack, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../../../routes/router'
import Banner from './components/banner'

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
				logo={require('../../../../assets/images/logo.png')}
				wallpaper={require('../../../../assets/images/wallpaper.png')}
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
