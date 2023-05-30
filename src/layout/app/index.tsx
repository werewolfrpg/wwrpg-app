import React from 'react'
import { Container, styled } from '@mui/material'
import Header from './navigation/header'
import Footer from './navigation/footer'

const Content = styled(Container)(({ theme }) => ({
	overflowX: 'hidden',
	marginTop: theme.spacing(5),
	marginBottom: theme.spacing(5)
}))

export default ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</>
	)
}
