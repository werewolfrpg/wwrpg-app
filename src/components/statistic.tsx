import React from 'react'
import { Stack, Typography } from '@mui/material'

interface StatisiticProps {
	title: string
	value: string
	caption?: string
}

export default ({ title, value, caption }: StatisiticProps) => {
	return (
		<Stack sx={{ px: 2, py: 0 }}>
			<Typography fontSize={16} fontWeight={900} color="grey">
				{title}
			</Typography>
			<Typography variant="h3">{value}</Typography>
			<Typography variant="caption">{caption}</Typography>
		</Stack>
	)
}
