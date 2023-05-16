import React from 'react'
import { useNavigate } from 'react-router-dom'

export default () => {
	const navigate = useNavigate()

	return (
		<div>
			<nav>
				<div onClick={() => navigate('/leaderboard')}>Leaderboard</div>
			</nav>
		</div>
	)
}
