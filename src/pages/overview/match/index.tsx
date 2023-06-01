import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MatchPlayer } from '../../../types/match'
import { getMatch } from '../../../apis/wwrpg'

export default () => {
	const { matchId } = useParams<{ matchId: string }>()
	const [match, setMatch] = useState<MatchPlayer[] | null>(null)

	useEffect(() => {
		if (matchId) {
			getMatch(matchId).then(setMatch)
		} else {
			setMatch(null)
		}
	}, [matchId])

	if (!match) {
		return <div>Loading...</div>
	}

	return <div>{JSON.stringify(match)}</div>
}
