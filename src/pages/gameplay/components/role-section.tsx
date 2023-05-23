import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export interface RoleSectionProps {
	name: string
	description: string
	image: string
	meta?: string[]
	flipped?: boolean
}

export default ({ name, description, image, meta, flipped = false }: RoleSectionProps) => {
	return (
		<Stack direction="row" alignItems="center" m={10} gap={20}>
			{!flipped && <Box component="img" src={image} />}
			<Box>
				<Typography variant="h2">{name}</Typography>
				<Box mt={5}>
					<Typography>{description}</Typography>
					<Stack m={3}>
						{meta?.map((info, index) => (
							<Typography key={index} my={0.5}>
								• {info}
							</Typography>
						))}
					</Stack>
				</Box>
			</Box>
			{flipped && <Box component="img" src={image} />}
		</Stack>
	)
}
