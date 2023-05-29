import React, { useState } from 'react'
import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import AppLayout from '../../layout/app-layout'
import RoleSection from './components/role-section'
import ItemDescriptor from './components/item-descriptor'
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
		image: require('../../assets/images/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Popular', 'Large', 'Difficult']
	},
	{
		name: 'Airship',
		image: require('../../assets/images/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Easy', 'Small']
	},
	{
		name: 'Airship',
		image: require('../../assets/images/map.png'),
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
		tags: ['Popular', 'Large', 'Difficult']
	}
]

const items = [
	{
		name: 'Werewolf Axe',
		description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
		icon: 'https://mc-heads.net/body/14d659f1-d5e7-433a-b413-9d7364bfcf39/left',
		roles: ['Werewolf'],
		shop: 'Basic',
		cost: 3
	},
	{
		name: "Traitor's Guide",
		description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
		icon: 'https://mc-heads.net/body/14d659f1-d5e7-433a-b413-9d7364bfcf39/left',
		roles: ['Traitor'],
		shop: 'Special',
		cost: 4
	},
	{
		name: 'Hunting Bow',
		description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
		icon: 'https://mc-heads.net/body/14d659f1-d5e7-433a-b413-9d7364bfcf39/left',
		roles: ['Werewolf', 'Villager', 'Traitor', 'Possessed', 'Vampire'],
		shop: 'Basic',
		cost: 2
	}
]

export default () => {
	return (
		<AppLayout>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					What is WWRPG?
				</Typography>
			</Box>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					Roles
				</Typography>
				{roles.map((role, index) => (
					<RoleSection key={index} {...role} flipped={index % 2 === 0} />
				))}
			</Box>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					Items
				</Typography>
				<Stack direction="row" justifyContent="center" gap={5}>
					<Stack>
						{items
							.filter(item => item.shop == 'Basic')
							.map((item, index) => (
								<ItemDescriptor key={index} {...item} />
							))}
					</Stack>
					<Box component="img" src="https://mc-heads.net/player/c5ef3347-4593-4f39-8bb1-2eaa40dd986e" />
					<Box component="img" src="https://mc-heads.net/player/c5ef3347-4593-4f39-8bb1-2eaa40dd986e" />
					<Stack>
						{items
							.filter(item => item.shop == 'Special')
							.map((item, index) => (
								<ItemDescriptor key={index} {...item} />
							))}
					</Stack>
				</Stack>
			</Box>
			<Box>
				<Typography variant="h1" align="center" my={8}>
					Score
				</Typography>
			</Box>
			<Box>
				<Typography variant="h1" align="center" my={8}>
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
