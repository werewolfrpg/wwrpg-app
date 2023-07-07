import React from 'react'
import { Stack, Typography, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { headers } from '../../routes/router'
import Header from './navigation/header'
import Footer from './navigation/footer'

const Title = styled(Stack)(({ theme }) => ({
	background: theme.palette.primary.main,
	width: '100%',
	paddingTop: theme.spacing(5),
	paddingBottom: theme.spacing(5),
	justifyContent: 'center',
	alignItems: 'center'
}))

export default ({ children }: React.PropsWithChildren) => {
	const location = useLocation()
	const title = headers.filter(({ path }) => path === location.pathname && path !== '/')[0]?.name

	const info = {
		server: 'aesten.net:25588',
		version: '1.19'
	}

	return (
		<>
			<Header {...info} />
			{title && (
				<Title>
					<Typography variant="h2">{title}</Typography>
				</Title>
			)}
			{children}
			<Footer {...info} />
		</>
	)
}
