import React from 'react'
import { Stack, Tooltip, Typography } from '@mui/material'

export interface StatisiticProps {
	title: string
	value: any
	caption?: any
	tooltip?: string
}

export default ({ title, value, caption, tooltip }: StatisiticProps) => {
	const text = value == 'NaN' ? '--' : value == 'Infinity' ? '0.0' : value

	return (
		<Tooltip title={tooltip}>
			<Stack sx={{ px: 2, py: 0 }}>
				<Typography fontSize={16} fontWeight={900} color="text.secondary">
					{title}
				</Typography>
				<Typography fontFamily="Minecraft" fontSize={24}>
					{text}
				</Typography>
				<Typography variant="caption">{caption}</Typography>
			</Stack>
		</Tooltip>
	)
}
