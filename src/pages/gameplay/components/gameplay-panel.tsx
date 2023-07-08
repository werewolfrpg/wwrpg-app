import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export interface GameplayPanelProps {
	description: string[]
	image: string
	flipped?: boolean
}

export default ({ image, description, flipped }: GameplayPanelProps) => {
	return (
		<Stack direction={flipped ? 'row' : 'row-reverse'} gap={10} my={10} alignItems="center">
			<Box component="img" src={image} width="50%" />
			<Box>
				{description.map((text, index) => (
					<Box key={index} mb={index != description.length - 1 ? 3 : 0}>
						<Typography variant="h4">{text}</Typography>
					</Box>
				))}
			</Box>
		</Stack>
	)
}
