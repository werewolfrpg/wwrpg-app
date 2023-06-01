import React from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { headers } from '../../routes/router'
import Header from './navigation/header'
import Footer from './navigation/footer'

export default ({ children }: React.PropsWithChildren) => {
	const location = useLocation()
	const title = headers.filter(({ path }) => path === location.pathname && path != '/')[0]?.name

	const info = {
		server: 'wwrpg.aesten.net',
		version: '1.19.2'
	}

	return (
		<>
			<Header {...info} />
			{title && (
				<Box bgcolor="green" width="100vw" py={5} display="flex" justifyContent="center">
					<Typography variant="h2">{title}</Typography>
				</Box>
			)}
			{children}
			<Footer {...info} />
		</>
	)
}
