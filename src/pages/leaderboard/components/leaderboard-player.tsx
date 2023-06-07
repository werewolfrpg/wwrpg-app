import React from 'react'
import { Stack, Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Container = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	gap: theme.spacing(2),
	cursor: 'pointer',
	':hover': {
		textDecoration: 'underline'
	}
}))

export interface LeaderboardPlayerProps {
	username: string
	minecraftId: string
}

export default ({ username, minecraftId }: LeaderboardPlayerProps) => {
	return (
		<Link to={'/overview/player/' + minecraftId} style={{ textDecoration: 'none', color: 'inherit' }}>
			<Container direction="row">
				<Box component="img" src={'https://mc-heads.net/avatar/' + minecraftId} height={40} borderRadius={1} />
				<Typography variant="h4">{username}</Typography>
			</Container>
		</Link>
	)
}
