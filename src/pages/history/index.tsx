import { useEffect, useState } from 'react'
import { Matches } from '../../types/match'
import { getMatchHistory } from '../../apis/wwrpg'
import MatchPanel from './components/match-panel'
import AppLayout from '../../layout/app'
import { Box, Container } from '@mui/material'

export default () => {
	const [matches, setMatches] = useState<Matches | null>(null)

	useEffect(() => {
		getMatchHistory(1, 20).then(setMatches)
	}, [])

	return (
		<AppLayout>
			<Container>
				<Box py={5}>
					<MatchPanel matches={matches} />
				</Box>
			</Container>
		</AppLayout>
	)
}
