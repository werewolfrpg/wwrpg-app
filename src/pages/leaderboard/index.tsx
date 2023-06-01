import React from 'react'
import Leaderboard from './components/leaderboard'
import AppLayout from '../../layout/app'
import { Container } from '@mui/material'

export default () => {
	return (
		<AppLayout>
			<Container>
				<Leaderboard />
			</Container>
		</AppLayout>
	)
}
