import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Box, Divider, Typography, styled } from '@mui/material'

const Container = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	gap: theme.spacing(2),
	cursor: 'pointer'
}))

export interface LeaderboardPlayerProps {
	username: string
	minecraftId: string
}

export default ({ username, minecraftId }: LeaderboardPlayerProps) => {
	const navigate = useNavigate()

	return (
		<Container direction="row" onClick={() => navigate('/overview/player/' + minecraftId)}>
			<Box component="img" src={'https://mc-heads.net/head/' + minecraftId} height={40} />
			<Divider style={{ color: 'white' }} orientation="vertical" />
			<Typography variant="h4">{username}</Typography>
		</Container>
	)
}
