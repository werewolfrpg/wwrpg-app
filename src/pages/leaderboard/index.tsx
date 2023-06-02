import React from 'react'
import Leaderboard from './components/leaderboard'
import AppLayout from '../../layout/app'
import { Box, Container } from '@mui/material'

export default () => {
	return (
		<AppLayout>
			<Container>
				<Box py={10}>
					<Leaderboard />
				</Box>
			</Container>
		</AppLayout>
	)
}
