import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppLayout from '../../layout/app'
import MapSection from './components/map-section'
import { getMaps } from '../../apis/wwrpg'
import { Map } from '../../types/map'

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
					<MapSection maps={maps} />
				</Box>
			</Container>
		</AppLayout>
	)
}
