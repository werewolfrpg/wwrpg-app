import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

export interface TitleProps {
	title: string
	icon?: JSX.Element
	divider?: boolean
}

export default ({ title, icon, divider }: TitleProps) => {
	return (
		<>
			<Box sx={{ p: 2 }} display="flex">
				{icon && icon}
				<Typography variant="h3" sx={{ px: 1 }}>
					{title}
				</Typography>
			</Box>
			{divider && <Divider />}
		</>
	)
}
