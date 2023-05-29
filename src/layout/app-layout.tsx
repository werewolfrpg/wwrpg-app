import React, { useLayoutEffect, useRef, useState } from 'react'
import { Container, AppBar, Typography, Stack, Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default ({ children }: React.PropsWithChildren) => {
	const [expanded, setExpanded] = useState(false)
	const container = useRef<any>()

	useLayoutEffect(() => {
		const listener = (_: Event) => {
			setExpanded(!!document.documentElement.scrollTop)
		}

		document.addEventListener('scroll', listener)
		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [])

	return (
		<>
			<AppBar position="fixed" color="inherit" elevation={expanded ? 4 : 0}>
				<Box ref={container}>
					<Container>
						<Stack
							direction="row"
							justifyContent="space-between"
							style={{ transition: '300ms ease' }}
							my={expanded ? 1 : 8}
						>
							<Grid container>
								<Grid item xs display="flex" justifyContent="space-around" alignItems="center">
									<HeaderButton name="Home" path="/" />
									<HeaderButton name="Gameplay" path="/gameplay" />
								</Grid>
								<HeaderLogo {...{ expanded }} />
								<Grid item xs display="flex" justifyContent="space-around" alignItems="center">
									<HeaderButton name="Leaderbaord" path="/leaderboard" />
									<HeaderButton name="Games" path="/history" />
								</Grid>
							</Grid>
						</Stack>
					</Container>
				</Box>
			</AppBar>
			<Box height={280} />
			<Container>{children}</Container>
		</>
	)
}

const HeaderButton = ({ name, path }: { name: string; path: string }) => {
	const navigate = useNavigate()

	return (
		<Typography fontSize={26} fontFamily="Minecraft Ten" style={{ cursor: 'pointer' }} onClick={() => navigate(path)}>
			{name}
		</Typography>
	)
}

const HeaderLogo = ({ expanded }: { expanded: boolean }) => {
	return (
		<Grid
			item
			xs={expanded ? 4 : 6}
			style={{ transition: '300ms ease' }}
			display="flex"
			justifyContent="space-around"
			alignItems="center"
		>
			<Box
				component="img"
				src={require('../assets/images/logo.png')}
				style={{ transition: '300ms ease' }}
				height={expanded ? 80 : 150}
			/>
		</Grid>
	)
}
