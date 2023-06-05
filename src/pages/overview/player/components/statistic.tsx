import React from 'react'
import { Skeleton, Stack, Tooltip, Typography } from '@mui/material'

export interface StatisiticProps {
	title?: string
	value?: any
	caption?: any
	tooltip?: string
	color?: string
}

export default ({ title, value, caption, tooltip, color }: StatisiticProps) => {
	// value may be '0', but falsy
	if (value === null || value === undefined) {
		return (
			<Tooltip title={tooltip}>
				<Stack px={2}>
					<Typography fontSize={16} fontWeight={900} color="text.secondary">
						<Skeleton width={80} />
					</Typography>
					<Typography fontFamily="Minecraft" fontSize={24}>
						<Skeleton width={50} height={33} />
					</Typography>
				</Stack>
			</Tooltip>
		)
	}

	return (
		<Tooltip title={tooltip}>
			<Stack px={2}>
				<Typography fontSize={16} fontWeight={900} color="text.secondary">
					{title}
				</Typography>
				<Typography fontFamily="Minecraft" fontSize={22} color={color}>
					{value == 'NaN' || value == 'Infinity' ? '--' : value}
				</Typography>
				<Typography variant="caption">{caption}</Typography>
			</Stack>
		</Tooltip>
	)
}
