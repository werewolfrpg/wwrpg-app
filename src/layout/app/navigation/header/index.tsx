import { useLayoutEffect, useRef, useState } from 'react'
import { Box, Collapse, Container, Divider, Hidden, Stack, styled } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { headers } from '../../../../routes/router'
import { ServerLinkProps } from '../../../../components/server-link'
import { Menu } from '@mui/icons-material'
import Banner from './components/banner'

const Header = styled(Box)(({ theme }) => ({
	background: theme.palette.background.paper,
	width: '100%',
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

const PageLink = styled(Link)({
	textDecoration: 'none',
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

export type HeaderProps = ServerLinkProps

export default (props: HeaderProps) => {
	const location = useLocation()
	const [isAtTop, setIsAtTop] = useState(false)
	const [showMenu, setShowMenu] = useState(true)
	const banner = useRef<HTMLElement>()
	const container = useRef<HTMLElement>()

	const shouldLoadBanner = location.pathname !== '/'

	useLayoutEffect(() => {
		window.scrollTo(0, 0) // TODO - review
		container.current?.scrollIntoView()

		if (shouldLoadBanner) {
			updateShowBanner()
			document.addEventListener('scroll', updateShowBanner)
			return () => document.removeEventListener('scroll', updateShowBanner)
		}
	}, [shouldLoadBanner])

	const updateShowBanner = () => {
		setIsAtTop(document.documentElement.scrollTop > banner.current!.clientHeight)
	}

	return (
		<>
			{shouldLoadBanner && (
				<Banner
					{...props}
					logo={require('../../../../assets/images/logo.png')}
					wallpaper={require('../../../../assets/images/wallpaper.png')}
					container={banner}
				/>
			)}
			<Header ref={container} position={!shouldLoadBanner || isAtTop ? 'fixed' : 'relative'}>
				<Container>
					<Hidden mdUp>
						<Box p={2}>
							<Menu onClick={() => setShowMenu(!showMenu)} />
						</Box>
					</Hidden>
					<Collapse in={showMenu}>
						<Content direction={{ md: 'row' }}>
							{headers.map((header, index) => (
								<PageLink to={header.path} key={index}>
									{header.name}
								</PageLink>
							))}
						</Content>
					</Collapse>
				</Container>
				<Divider />
			</Header>
			{isAtTop && <Box height={container.current?.clientHeight} />}
		</>
	)
}
