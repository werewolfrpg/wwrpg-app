import axios from 'axios'
import { Profile } from '../types/mojang'

const BASE_URL = process.env.REACT_APP_MOJANG_BASE_URL

export const getName = async (minecraftId: string): Promise<string> => {
	const res = await axios.get(BASE_URL + '/user/' + minecraftId)
	const { username } = res.data as Profile
	return username
}
