import { useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Stack, Box, Typography, Chip, styled } from '@mui/material'

const ArrowButton = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	margin: theme.spacing(3)
}))

const MapIndicator = styled(Box)(({ active }: { active: boolean }) => ({
	background: 'white',
	cursor: 'pointer',
	width: 8,
	height: 8,
	opacity: active ? 1 : 0.5
}))

export type Map = {
	name: string
	thumbnail: string
	description: string
	tags: string[]
}

export interface MapsSectionProps {
	maps: Map[]
}

export default ({ maps }: MapsSectionProps) => {
	const [map, setMap] = useState(0)

	const handleNextMap = () => {
		setMap(map == maps.length - 1 ? 0 : map + 1)
	}

	const handlePreviousMap = () => {
		setMap(map == 0 ? maps.length - 1 : map - 1)
	}

	return (
		<>
			<Stack direction="row" alignItems="center" justifyContent="center">
				<ArrowButton>
					<ArrowBack onClick={handlePreviousMap} />
				</ArrowButton>
				<Box component="img" src={maps[map].thumbnail} width="80%" />
				<ArrowButton>
					<ArrowForward onClick={handleNextMap} />
				</ArrowButton>
			</Stack>
			<Stack direction="row" gap={1} justifyContent="center" m={3}>
				{maps.map((_, index) => (
					<MapIndicator key={index} active={index === map} onClick={() => setMap(index)} />
				))}
			</Stack>
			<Stack alignItems="center" my={6}>
				<Typography fontSize={26} fontFamily={'Minecraft Ten'}>
					{maps[map].name}
				</Typography>
				<Stack direction="row" gap={1} my={3}>
					{maps[map].tags.map((tag, index) => (
						<Chip key={index} label={tag} style={{ background: 'green' }} />
					))}
				</Stack>
				<Typography textAlign="center" fontSize={18} mx={12}>
					{maps[map].description}
				</Typography>
			</Stack>
		</>
	)
}
