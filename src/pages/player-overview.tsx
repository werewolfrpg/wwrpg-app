import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerOverview } from '../types/overview'
import { getPlayerStats } from '../apis/wwrpg'
import { MatchOverview } from '../types/match'
import { getPlayerMatchHistory } from '../apis/wwrpg'

export default () => {
	const { minecraftId } = useParams<{ minecraftId: string }>()
	const [stats, setStats] = useState<PlayerOverview | null>(null)
	const [matches, setMatches] = useState<MatchOverview[] | null>(null)

	useEffect(() => {
		if (minecraftId) {
			getPlayerStats(minecraftId).then(setStats).catch(console.error)
			getPlayerMatchHistory(minecraftId).then(setMatches).catch(console.error)
		} else {
			setStats(null)
		}
	}, [minecraftId])

	if (!stats) {
		return <div>loading...</div>
	}

	return (
		<div>
			<pre>{JSON.stringify(stats)}</pre>
			<pre>{JSON.stringify(matches)}</pre>
		</div>
	)
}
