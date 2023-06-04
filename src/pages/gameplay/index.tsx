import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppLayout from '../../layout/app'
import MapsSection from './components/maps-section'
import { getMaps } from '../../apis/wwrpg'
import { Map } from '../../types/map'

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
	const [maps, setMaps] = useState<Map[]>([])

	useEffect(() => {
		getMaps().then(setMaps).catch(console.error)
	}, [])

	return (
		<AppLayout>
			<Container>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Roles & Objectives
					</Typography>
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Day-Night Cycle
					</Typography>
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Shops & Skeletons
					</Typography>
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Point System
					</Typography>
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Maps
					</Typography>
					<MapsSection maps={maps} />
				</Box>
			</Container>
		</AppLayout>
	)
}
