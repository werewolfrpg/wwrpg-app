import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'

export interface MapCardProps {
	name: string
	description: string
	image: string
	tags?: string[]
}

export default ({ name, description, image, tags = [] }: MapCardProps) => (
	<Card>
		<CardActionArea>
			<CardMedia component="img" height="200" image={image} />
			<CardContent>
				<Stack>
					<Typography variant="h3">{name}</Typography>
					<Stack direction="row" my={1} gap={1}>
						{tags?.map((tag, index) => (
							<Chip key={index} label={tag} />
						))}
					</Stack>
					<Typography variant="caption">{description}</Typography>
				</Stack>
			</CardContent>
		</CardActionArea>
	</Card>
)
