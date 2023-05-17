import React from 'react'
import { Box, Card, Divider, Typography } from '@mui/material'

interface PanelProps extends React.PropsWithChildren {
	title: string
	icon?: JSX.Element
}

export default ({ title, icon, children }: PanelProps) => {
	return (
		<Card>
			<Box sx={{ p: 2 }} display="flex">
				{icon && icon}
				<Typography variant="h3" sx={{ px: 1 }}>
					{title}
				</Typography>
			</Box>
			<Divider />
			{children}
		</Card>
	)
}
