export interface TitleDetail {
	name: string
	color: string
	description: string
}

export type Role = TitleDetail & {
	id: string
}

export type Faction = TitleDetail & {
	id: string
	roles: Role[]
}

export type RoleDto = Record<string, TitleDetail>

export type FactionDto = TitleDetail & {
	roles: RoleDto
}

export type FactionsDto = Record<string, FactionDto>
