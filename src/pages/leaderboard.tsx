import { useEffect, useState } from 'react'
import { Leaderboard } from '../types/leaderboard'
import { getLeaderboard } from '../apis/wwrpg'
import { useNavigate } from 'react-router-dom'

export default () => {
	const navigate = useNavigate()

	const [page, setPage] = useState(1)
	const [count, _] = useState(20) // TODO
	const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)

	useEffect(() => {
		setLeaderboard(null)
		getLeaderboard(page, count).then(setLeaderboard).catch(console.error)
	}, [page, count])

	const nextPage = () => {
		if (leaderboard && page > 1) {
			setPage(page - 1)
		}
	}

	const previousPage = () => {
		if (leaderboard && page < leaderboard.meta.totalPageNumber) {
			setPage(page + 1)
		}
	}

	if (!leaderboard) {
		return <div>loading...</div>
	}

	return (
		<div>
			<div>
				{leaderboard.data.map(({ minecraftId, minecraftUsername }) => (
					<div key={minecraftId} onClick={() => navigate('/overview/player/' + minecraftId)}>
						{minecraftUsername}
					</div>
				))}
				<div onClick={previousPage}>prev</div>
				<div onClick={nextPage}>next</div>
			</div>
		</div>
	)
}
