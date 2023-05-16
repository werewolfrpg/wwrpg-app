export enum Faction {
	VILLAGER,
	WEREWOLF,
	VAMPIRE
}

export interface Role {
	name: string
	faction: Faction
}
