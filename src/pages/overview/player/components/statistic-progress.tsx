import React from 'react'
import { CircularProgress, Stack, styled } from '@mui/material'

const Container = styled(Stack)({
	position: 'relative',
	alignItems: 'center',
	justifyContent: 'center'
})

const Foreground = styled(CircularProgress)<{ fgColor?: string }>(({ theme, fgColor }) => ({
	position: 'absolute',
	px: theme.spacing(1),
	color: fgColor ?? theme.palette.primary.main,
	left: 0
}))

const Background = styled(CircularProgress)(({ theme }) => ({
	px: theme.spacing(1),
	color: theme.palette.text.secondary
}))

Foreground.defaultProps = Background.defaultProps = {
	variant: 'determinate',
	thickness: 5
}

export interface StatisticProgressProps {
	progress: number
	color?: string
}

export default ({ progress, color }: StatisticProgressProps) => {
	return (
		<Container>
			<Background size={50} value={100} />
			<Foreground size={50} value={progress} fgColor={color} />
		</Container>
	)
}
