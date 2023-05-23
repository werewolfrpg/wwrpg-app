import React from 'react'
import { Container, AppBar, useScrollTrigger, Slide, Toolbar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate()
	const trigger = useScrollTrigger()

	return (
		<>
			<Slide appear={false} direction="down" in={!trigger}>
				<AppBar position="fixed">
					<Container>
						<Toolbar disableGutters>
							<Button sx={{ color: '#fff' }} onClick={() => navigate('/')}>
								Home
							</Button>
							<Button sx={{ color: '#fff' }} onClick={() => navigate('/gameplay')}>
								Gameplay
							</Button>
							<Button sx={{ color: '#fff' }} onClick={() => navigate('/leaderboard')}>
								Leaderboard
							</Button>
							<Button sx={{ color: '#fff' }} onClick={() => navigate('/history')}>
								Match History
							</Button>
						</Toolbar>
					</Container>
				</AppBar>
			</Slide>
			<Toolbar />
			<Container>{children}</Container>
		</>
	)
}
