import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppLayout from '../../layout/app'
import MapSection from './components/map-section'
import { getMaps } from '../../apis/wwrpg'
import { Map } from '../../types/map'

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
