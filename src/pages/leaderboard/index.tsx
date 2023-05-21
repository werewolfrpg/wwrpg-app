import React from 'react'
import Leaderboard from './components/leaderboard'
import { Grid } from '@mui/material'

export default () => {
	return (
		<Grid container spacing={4} justifyContent="center">
			<Grid item>
				<Leaderboard />
			</Grid>
		</Grid>
	)
}
