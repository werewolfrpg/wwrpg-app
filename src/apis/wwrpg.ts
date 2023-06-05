import { SkeletonsDto } from './../types/player.d'
import {
	DailyMatches,
	MatchPlayerDto,
	MatchDto,
	Matches,
	MatchesDto,
	PlayerMatch,
	PlayerMatches,
	MatchPlayer,
	PlayerMatchesDto,
	GameMatch,
	MatchTeam
} from '../types/match'
import { Leaderboard, LeaderboardDto } from '../types/leaderboard'
import { PlayerDto, PlayerStatistic, Skeletons } from '../types/player'
import { Faction, FactionsDto } from '../types/faction'
import { Match } from '../types/match'
import { getName } from './mojang'
import { Map, MapDto } from '../types/map'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_WWRPG_BASE_URL

export const getLeaderboard = async (page: number = 1, count: number = 20): Promise<Leaderboard> => {
	const res = await axios.get(BASE_URL + '/api/leaderboard/?page=' + page + '&number=' + count)
	const { meta, data: players } = res.data as LeaderboardDto

	const data = await Promise.all(
		players.map(async player => ({
			username: await getName(player.minecraftId),
			rank: player.ranking,
			won: player.gamesWon,
			played: player.gamesPlayed,
			...player
		}))
	)
	return { meta, data }

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({ meta, data })
	// 	}, 3000)
	// })
}

export const getPlayerStats = async (minecraftId: string): Promise<PlayerStatistic> => {
	const res = await axios.get(BASE_URL + '/api/stats/' + minecraftId)
	const data = res.data as PlayerDto

	const a = data.nextThreshold - data.currentThreshold
	const b = data.score - data.currentThreshold
	const score = {
		current: data.score,
		next: data.nextThreshold,
		difference: a - b,
		progress: data.nextThreshold === -1 ? 100 : a / b
	}

	const skeletons = convertSkeletons(data.skeletons)

	const factions = await getFactions()
	const factionRoles = factions.map(faction => faction.roles).reduce((_, roles) => [..._, ...roles], [])
	const roles = data.gameStats
		.map(stat => ({
			role: factionRoles.find(role => role.id === stat.role)!,
			played: stat.data.played,
			won: stat.data.victories
		}))
		.sort((a, b) => a.played / a.won - b.played / b.won)

	const matches = {
		played: roles.reduce((sum, { played }) => sum + played, 0),
		won: roles.reduce((sum, { won }) => sum + won, 0)
	}

	const title = {
		current: data.title,
		next: data.nextTitle
	}

	const username = await getName(minecraftId)

	return {
		minecraftId: data.minecraftId,
		rank: data.ranking,
		kills: data.kills,
		deaths: data.deaths,
		items: data.items,
		username,
		skeletons,
		matches,
		title,
		score,
		roles
	}

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({
	// 			minecraftId: data.minecraftId,
	// 			rank: data.ranking,
	// 			kills: data.kills,
	// 			deaths: data.deaths,
	// 			items: data.items,
	// 			username,
	// 			skeletons,
	// 			matches,
	// 			title,
	// 			score,
	// 			roles
	// 		})
	// 	}, 3000)
	// })
}

export const getPlayerMatchHistory = async (
	minecraftId: string,
	page: number = 1,
	count: number = 20
): Promise<PlayerMatches> => {
	const res = await axios.get(BASE_URL + '/api/match/player/' + minecraftId + '?page=' + page + '&number=' + count)
	const { meta, data: raw } = res.data as PlayerMatchesDto

	const factions = await getFactions()
	const roles = factions.map(faction => faction.roles).reduce((_, roles) => [..._, ...roles], [])
	const playerMatches = raw.map(match => ({ ...match, role: roles.find(role => role.id === match.role) }))

	const matches = await Promise.all(playerMatches.map(match => convertMatch(match, factions)))
	const data = (await convertToDailyMatches(matches)) as DailyMatches<PlayerMatch>[]
	return { meta, data }

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({ meta, data })
	// 	}, 3000)
	// })
}

export const getMatchHistory = async (page: number = 1, count: number = 20): Promise<Matches> => {
	const res = await axios.get(BASE_URL + '/api/matches?page=' + page + '&number=' + count)
	const { meta, data: raw } = res.data as MatchesDto

	const factions = await getFactions()
	const matches = await Promise.all(raw.map(match => convertMatch(match, factions)))
	const data = await convertToDailyMatches(matches)
	return { meta, data }

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({ meta, data })
	// 	}, 3000)
	// })
}

export const getMatchPlayers = async (matchId: string): Promise<MatchPlayer[]> => {
	const res = await axios.get(BASE_URL + '/api/stats/match/' + matchId)
	const raw = res.data as MatchPlayerDto[]

	const factions = await getFactions()
	const roles = factions.map(faction => faction.roles).reduce((_, roles) => [..._, ...roles], [])

	const players = await Promise.all(
		raw.map(async data => {
			const { playerId: minecraftId, scoreGain, deathCause, role: roleId, ...stats } = data
			const skeletons = convertSkeletons(data.skeletons)
			const username = await getName(minecraftId)
			const role = roles.find(role => role.id === roleId)!
			return { minecraftId, role, username, score: scoreGain, death: deathCause, ...stats, skeletons }
		})
	)
	return players.sort((a, b) => b.score - a.score)
}

export const getMatch = async (matchId: string): Promise<Match> => {
	const res = await axios.get(BASE_URL + '/api/match/' + matchId)
	const data = res.data as MatchDto
	const factions = await getFactions()
	const match = await convertMatch(data, factions)
	return { ...match, duration: convertDuration(match.duration as number) }

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({ ...match, duration: convertDuration(match.duration as number) })
	// 	}, 3000)
	// })
}

export const getGameMatch = async (matchId: string): Promise<GameMatch> => {
	const overview = await getMatch(matchId)
	const factions = await getFactions()
	const players = await getMatchPlayers(matchId)
	const teams: MatchTeam[] = factions.map(faction => ({ faction, players: [] })).reverse()

	for (const player of players) {
		teams.find(f => f.faction.roles.find(r => r.id === player.role.id))?.players.push(player)
	}
	return { overview, teams }
}

export const getMaps = async (): Promise<Map[]> => {
	const res = await axios.get(BASE_URL + '/api/maps')
	const data = res.data as MapDto[]

	return data.map(({ image, name, ...info }) => ({
		id: name,
		name: name[0].toUpperCase() + name.replace('_', ' ').substring(1).toLowerCase(),
		image: BASE_URL + '/maps/thumbnails/' + image,
		...info
	}))
}

export const getFactions = async (): Promise<Faction[]> => {
	const res = await axios.get(BASE_URL + '/api/roles')
	const data = res.data as FactionsDto

	return Object.entries(data).map(([faction, { roles, ...info }]) => ({
		id: faction,
		...info,
		roles: Object.entries(roles).map(([role, info]) => ({
			id: role,
			...info
		}))
	}))
}

const convertMatch = async (match: MatchDto, factions: Faction[]): Promise<Match> => {
	const { startTime, endTime, winnerFaction, map: mapId, ...data } = match
	const start = new Date(startTime)
	const date = start.toLocaleString('en-us', { month: 'long', day: 'numeric' })
	const time = start.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })
	const duration = endTime - startTime
	const winner = factions.find(faction => faction.id === winnerFaction)
	const state = !winner ? 'Game Canceled' : winner.name + ' Victory'
	const map = (await getMaps()).find(map => map.id === mapId)!
	return { ...data, map, winner, duration, time, date, state }
}

const convertSkeletons = (skeletons: SkeletonsDto): Skeletons => {
	return {
		emeralds: skeletons.basicSkeletonEmeraldDrops + 2 * skeletons.killedLuckySkeletons,
		killed: {
			basic: skeletons.killedBasicSkeletons,
			lucky: skeletons.killedLuckySkeletons,
			special: skeletons.killedSpecialSkeletons
		}
	}
}

const convertToDailyMatches = async (matches: Match[]): Promise<DailyMatches<Match>[]> => {
	const dailyMatches: Record<string, Match[]> = {}
	for (const match of matches) {
		if (!dailyMatches[match.date]) {
			dailyMatches[match.date] = []
		}
		dailyMatches[match.date].push(match)
	}

	const matchesByDate: DailyMatches<Match>[] = []
	for (const [date, matches] of Object.entries(dailyMatches)) {
		matchesByDate.push({
			date,
			duration: convertDuration(matches.reduce<any>((total, match) => total + match.duration, 0)),
			matches: matches.map(match => ({ ...match, duration: convertDuration(match.duration as number) }))
		})
	}
	return matchesByDate
}

const convertDuration = (time: number) => {
	const hours = Math.floor(time / (1000 * 60 * 60))
	const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((time % (1000 * 60)) / 1000)

	let duration = ''
	if (hours > 0) {
		duration += hours + 'h '
	}
	if (minutes > 0) {
		duration += minutes + 'm '
	}
	if (seconds > 0) {
		duration += seconds + 's'
	}
	if (duration === '') {
		duration = '--'
	}
	return duration
}
