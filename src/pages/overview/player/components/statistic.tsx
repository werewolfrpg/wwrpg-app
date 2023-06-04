import React from 'react'
import { Skeleton, Stack, Tooltip, Typography } from '@mui/material'

export interface StatisiticProps {
	title?: string
	value?: any
	caption?: any
	tooltip?: string
}

export default ({ title, value, caption, tooltip }: StatisiticProps) => {
	// value may be '0', but valid
	if (value === null || value === undefined) {
		return (
			<Tooltip title={tooltip}>
				<Stack px={2}>
					<Typography fontSize={16} fontWeight={900} color="text.secondary">
						<Skeleton width={80} />
					</Typography>
					<Typography fontFamily="Minecraft" fontSize={24}>
						<Skeleton width={50} />
					</Typography>
					<Typography variant="caption">{caption}</Typography>
				</Stack>
			</Tooltip>
		)
	}

	console.log(title, value)

	return (
		<Tooltip title={tooltip}>
			<Stack px={2}>
				<Typography fontSize={16} fontWeight={900} color="text.secondary">
					{title}
				</Typography>
				<Typography fontFamily="Minecraft" fontSize={24}>
					{value == 'NaN' || value == 'Infinity' ? '--' : value}
					{/* {value} */}
				</Typography>
				<Typography variant="caption">{caption}</Typography>
			</Stack>
		</Tooltip>
	)
}
