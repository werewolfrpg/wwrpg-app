import React from 'react'
import { Container, AppBar, useScrollTrigger, Slide, Box, Grid, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate()
	const trigger = useScrollTrigger()

	return (
		<>
			<Slide appear={false} direction="down" in={!trigger}>
				<AppBar position="fixed" style={{ background: '#fff' }}>
					<Container>
						<Grid container direction="row" alignItems="center" px={5} py={3}>
							<Grid item xs display="flex" alignItems="center" justifyContent="space-evenly">
								<Box
									component="img"
									src={require('../assets/headers/home.png')}
									onClick={() => navigate('/')}
									sx={{ cursor: 'pointer', transition: '300ms', ':hover': { opacity: 0.5 } }}
									height={25}
								/>
								<Box
									component="img"
									src={require('../assets/headers/gameplay.png')}
									onClick={() => navigate('/gameplay')}
									sx={{ cursor: 'pointer', transition: '300ms', ':hover': { opacity: 0.5 } }}
									height={25}
								/>
							</Grid>
							<Grid item xs display="flex" alignItems="center" justifyContent="space-evenly">
								<Box component="img" src={require('../assets/headers/wwrpg-logo.png')} height={80} />
							</Grid>
							<Grid item xs display="flex" alignItems="center" justifyContent="space-evenly">
								<Box
									component="img"
									src={require('../assets/headers/leaderboard.png')}
									onClick={() => navigate('/leaderboard')}
									sx={{ cursor: 'pointer', transition: '300ms', ':hover': { opacity: 0.5 } }}
									height={25}
								/>
								<Box
									component="img"
									src={require('../assets/headers/games.png')}
									onClick={() => navigate('/history')}
									sx={{ cursor: 'pointer', transition: '300ms', ':hover': { opacity: 0.5 } }}
									height={25}
								/>
							</Grid>
						</Grid>
					</Container>
				</AppBar>
			</Slide>
			<Toolbar />
			<Toolbar />
			<Container>{children}</Container>
		</>
	)
}
