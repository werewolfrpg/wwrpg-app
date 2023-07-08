import React from 'react'
import { Box, Card, Divider, Typography } from '@mui/material'
import GameplayPanel, { GameplayPanelProps } from './gameplay-panel'

export interface GameplaySectionProps {
	sections: GameplayPanelProps[]
	tips: string[]
}

export default ({ sections, tips }: GameplaySectionProps) => {
	return (
		<Box>
			{sections.map((section, index) => (
				<GameplayPanel key={index} {...section} flipped={index % 2 == 0} />
			))}
			<Card>
				<Typography variant="h3" align="center" p={3}>
					Beginner Tips
				</Typography>
				<Divider />
				<Box my={3} px={3}>
					{tips.map((tip, index) => (
						<Box key={index} mt={2}>
							<Typography variant="caption">• {tip}</Typography>
						</Box>
					))}
				</Box>
			</Card>
		</Box>
	)
}
