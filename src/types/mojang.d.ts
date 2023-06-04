export interface Profile {
	uuid: string
	username: string
	username_history: UsernameHistory[]
	textures: Textures
	created_at: null | string
}

export interface UsernameHistory {
	username: string
}

export interface Textures {
	custom: boolean
	slim: boolean
	skin: Skin
	raw: Raw
}

export interface Skin {
	url: string
	data: string
}

export interface Raw {
	value: string
	signature: string
}
