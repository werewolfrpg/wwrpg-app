import React from 'react'
import { Box, Container, Stack, styled } from '@mui/material'

const Footer = styled(Box)(({ theme }) => ({
	background: theme.palette.background.paper,
	width: '100vw',
	bottom: 0,
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(4)
}))

const Content = styled(Stack)(({ theme }) => ({
	justifyContent: 'space-between',
	marginLeft: theme.spacing(10),
	marginRight: theme.spacing(10),
	padding: theme.spacing(1)
}))

export default () => {
	return (
		<Footer>
			<Container>
				<Content>
					<Stack>example</Stack>
				</Content>
			</Container>
		</Footer>
	)
}
