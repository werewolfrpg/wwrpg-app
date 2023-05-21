import React, { useEffect, useState } from 'react'
import { MatchOverview } from '../../types/match'
import { getMatchHistory } from '../../apis/wwrpg'
import MatchesPanel from './components/matches-panel'

export default () => {
	const [matches, setMatches] = useState<MatchOverview | null>(null)

	useEffect(() => {
		getMatchHistory(1, 20).then(setMatches)
	}, [])

	if (!matches) {
		return <div>loading...</div>
	}

	return <MatchesPanel matches={matches} />
}
