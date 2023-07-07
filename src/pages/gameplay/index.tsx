import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppLayout from '../../layout/app'
import MapSection from './components/map-section'
import { getFactions, getMaps } from '../../apis/wwrpg'
import { Map } from '../../types/map'
import { Faction } from '../../types/faction'
import ObjectivePanel from './components/objective-panel'
import ItemSection from './components/item-section'
import GameplaySection from './components/gameplay-section'

export default () => {
	const [maps, setMaps] = useState<Map[]>([])
	const [factions, setFactions] = useState<Faction[]>([])

	useEffect(() => {
		getMaps().then(setMaps).catch(console.error)
		getFactions().then(setFactions).catch(console.error)
	}, [])

	if (!maps || !factions) {
		return <></>
	}

	return (
		<AppLayout>
			<Container>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Roles & Objectives
					</Typography>
					{factions.map((faction, index) => (
						<ObjectivePanel key={index} faction={faction} />
					))}
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Gameplay Basics
					</Typography>
					<GameplaySection />
				</Box>
				<Box>
					<Typography variant="h1" align="center" my={8}>
						Items
					</Typography>
					<ItemSection
						items={Array(20).fill({
							name: 'Axe',
							description: 'This is an exmple',
							image: require('../../assets/images/items/item.png')
						})}
					/>
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
