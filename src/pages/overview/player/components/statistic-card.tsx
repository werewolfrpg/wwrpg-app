import React from 'react'
import { Card, styled } from '@mui/material'
import Statistic, { StatisiticProps } from './statistic'

const Container = styled(Card)(({ theme }) => ({
	borderWidth: 0,
	transition: 'ease 150ms',
	padding: theme.spacing(1),
	margin: theme.spacing(1),
	':hover': {
		background: theme.palette.background.default
	}
}))

export default (props: StatisiticProps) => {
	return (
		<Container>
			<Statistic {...props} />
		</Container>
	)
}
