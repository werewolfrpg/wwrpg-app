import React from 'react'
import AppLayout from '../../layout/app-layout'
import RoleSection from './components/role-section'
import { Box, Stack, Typography } from '@mui/material'
import MapCard from './components/map-card'

const roles = [
	{
		name: 'Villager',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
		image: 'https://mc-heads.net/body/14d659f1-d5e7-433a-b413-9d7364bfcf39/left',
		meta: ['example meta 1', 'example meta 2', 'example meta 3', 'example meta 4']
	},
	{
		name: 'Werewolf',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
		image: 'https://mc-heads.net/body/120eaf42-f271-45ff-9c20-190a56ae26c7',
		meta: ['example meta 1', 'example meta 2', 'example meta 3', 'example meta 4']
	},
	{
		name: 'Traitor',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
		image: 'https://mc-heads.net/body/5ca277ce-4227-41f2-9e9b-517da62c2331/left',
		meta: ['example meta 1', 'example meta 2', 'example meta 3', 'example meta 4']
	}
]

const maps = [
	{
		name: 'Airship',
		image: require('../../assets/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Popular', 'Large', 'Difficult']
	},
	{
		name: 'Airship',
		image: require('../../assets/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Easy', 'Small']
	},
	{
		name: 'Airship',
		image: require('../../assets/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Popular', 'Large', 'Difficult']
	}
]

export default () => {
	return (
		<AppLayout>
			<Box>Overview</Box>
			<Box>
				{roles.map((role, index) => (
					<RoleSection key={index} {...role} flipped={index % 2 === 0} />
				))}
			</Box>
			<Box>Items</Box>
			<Box>Score</Box>
			<Box>
				<Typography variant="h2" align="center">
					Maps
				</Typography>
				<Stack direction="row" gap={3}>
					{maps.map((map, index) => (
						<MapCard key={index} {...map} />
					))}
				</Stack>
			</Box>
		</AppLayout>
	)
}
