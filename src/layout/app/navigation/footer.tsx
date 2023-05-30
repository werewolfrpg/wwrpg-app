import React from 'react'
import { Box, Container, Stack, Typography, styled } from '@mui/material'
import { RouteLink, headers } from '../../../routes/router'
import { useNavigate } from 'react-router-dom'

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
	marginRight: theme.spacing(10)
}))

const Link = styled(Typography)({
	color: 'white',
	cursor: 'pointer',
	fontSize: 16,
	transition: '300ms ease',
	'&:hover': {
		opacity: 0.5
	}
})

export default () => {
	return (
		<Footer>
			<Container>
				<Content>
					<Section section="Quick Links" links={headers} />
				</Content>
			</Container>
		</Footer>
	)
}

const Section = ({ section, links }: { section: string; links: RouteLink[] }) => {
	const navigate = useNavigate()

	return (
		<Stack>
			<Typography fontSize={18} fontFamily="Minecraft" my={2}>
				{section}
			</Typography>
			{links.map((link, index) => (
				<Link key={index} onClick={() => navigate(link.path)}>
					{link.name}
				</Link>
			))}
		</Stack>
	)
}
