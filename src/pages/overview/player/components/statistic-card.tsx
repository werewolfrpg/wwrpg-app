import React from 'react'
import { Card } from '@mui/material'
import Statistic, { StatisiticProps } from './statistic'

export default ({ title, value, caption }: StatisiticProps) => {
	return (
		<Card
			sx={{
				p: 1,
				borderWidth: 0,
				transition: 'ease 150ms',
				m: 1,
				flex: 1,
				':hover': {
					background: 'whitesmoke'
				}
			}}
		>
			<Statistic title={title} value={value} caption={caption} />
		</Card>
	)
}
