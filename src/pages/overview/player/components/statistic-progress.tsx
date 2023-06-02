import React from 'react'
import { CircularProgress, Stack, styled } from '@mui/material'

const Container = styled(Stack)({
	position: 'relative',
	alignItems: 'center',
	justifyContent: 'center'
})

const Foreground = styled(CircularProgress)(({ theme }) => ({
	position: 'absolute',
	px: theme.spacing(1),
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
}

export default ({ progress }: StatisticProgressProps) => {
	return (
		<Container>
			<Background size={50} value={100} />
			<Foreground size={50} value={progress} />
		</Container>
	)
}
