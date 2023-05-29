import React, { useLayoutEffect, useState } from 'react'
import { Container, AppBar, Typography, Stack, Box, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HeaderLink = styled(Typography)({
	cursor: 'pointer',
	fontSize: 20,
	fontFamily: 'Minecraft Ten',
	transition: 'line-height 300ms ease',
	'&:hover': {
		lineHeight: 1,
		textDecoration: 'underline',
		textUnderlineOffset: 5,
		textDecorationThickness: 3
	}
})

export default ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate()
	const [expanded, setExpanded] = useState(false)

	useLayoutEffect(() => {
		const listener = (_: Event) => setExpanded(!!document.documentElement.scrollTop)
		document.addEventListener('scroll', listener)
		return () => document.removeEventListener('scroll', listener)
	}, [])

	return (
		<>
			<AppBar position="fixed" color="inherit" elevation={expanded ? 4 : 0}>
				<Container>
					<Stack
						direction="row"
						justifyContent="space-around"
						style={{ transition: '300ms ease' }}
						my={expanded ? 2 : 8}
					>
						<HeaderLink onClick={() => navigate('/')}>Home</HeaderLink>
						<HeaderLink onClick={() => navigate('/gameplay')}>Gameplay</HeaderLink>
						<HeaderLink onClick={() => navigate('/leaderboard')}>Leaderbaord</HeaderLink>
						<HeaderLink onClick={() => navigate('/history')}>Games</HeaderLink>
					</Stack>
				</Container>
			</AppBar>
			<Box height={160} /> {/* important */}
			<Container>{children}</Container>
		</>
	)
}
