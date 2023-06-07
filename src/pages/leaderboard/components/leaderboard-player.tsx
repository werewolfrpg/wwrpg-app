import React from 'react'
import { Stack, Box, Typography, styled, Skeleton } from '@mui/material'

const Container = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	gap: theme.spacing(2)
}))

export interface LeaderboardPlayerProps {
	username?: string
	minecraftId?: string
	caption?: string | React.ReactNode
}

export default ({ username, minecraftId, caption }: LeaderboardPlayerProps) => {
	if (!username || !minecraftId) {
		return (
			<Stack direction="row" alignItems="center" gap={3}>
				<Skeleton width={40} height={40} variant="circular" />
				<Skeleton width={100} />
			</Stack>
		)
	}

	return (
		<Container direction="row">
			<Box component="img" src={'https://mc-heads.net/avatar/' + minecraftId} height={40} borderRadius={1} />
			<Stack>
				<Typography variant="h4">{username}</Typography>
				{caption && caption}
			</Stack>
		</Container>
	)
}
