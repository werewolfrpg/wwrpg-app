import { useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Stack, Box, Typography, styled, Chip } from '@mui/material'
import { Map } from '../../../types/map'

const ArrowButton = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	margin: theme.spacing(1),
	padding: theme.spacing(1)
}))

const MapIndicator = styled(Box)(({ active }: { active: boolean }) => ({
	background: 'white',
	cursor: 'pointer',
	width: 8,
	height: 8,
	opacity: active ? 1 : 0.5
}))

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

	if (!maps.length) {
		return <></>
	}

	return (
		<>
			<Stack direction="row" alignItems="center" justifyContent="center">
				<ArrowButton>
					<ArrowBack onClick={handlePreviousMap} />
				</ArrowButton>
				<Box component="img" src={maps[map].image} width="80%" />
				<ArrowButton>
					<ArrowForward onClick={handleNextMap} />
				</ArrowButton>
			</Stack>
			<Stack direction="row" gap={1} justifyContent="center" m={3}>
				{maps.map((_, index) => (
					<MapIndicator key={index} active={index === map} onClick={() => setMap(index)} />
				))}
			</Stack>
			<Stack alignItems="center" my={3}>
				<Stack direction="row" gap={1} my={3}>
					{maps[map].tags.map((tag, index) => (
						<Chip key={index} label={tag} />
					))}
				</Stack>
				<Typography fontSize={26} fontFamily="Minecraft Ten">
					{maps[map].name}
				</Typography>
				<Typography textAlign="center" fontSize={18} mx={{ md: 12 }}>
					{maps[map].description}
				</Typography>
			</Stack>
		</>
	)
}
