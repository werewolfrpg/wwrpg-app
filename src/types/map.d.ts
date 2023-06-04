export interface MapDto {
	name: string
	description: string
	image: string
	tags: string[]
}

export interface Map {
	id: string
	name: string
	description: string
	image?: string
	tags: string[]
}
