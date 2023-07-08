import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppLayout from '../../layout/app'
import MapSection from './components/map-section'
import { getFactions, getMaps } from '../../apis/wwrpg'
import { Map } from '../../types/map'
import { Faction } from '../../types/faction'
import ObjectivePanel from './components/objective-panel'
import ItemSection from './components/item-section'
import GameplaySection from './components/gameplay-section'

export default () => {
	const [maps, setMaps] = useState<Map[]>([])
	const [factions, setFactions] = useState<Faction[]>([])

	useEffect(() => {
		getMaps().then(setMaps).catch(console.error)
		getFactions().then(setFactions).catch(console.error)
	}, [])

	if (!maps || !factions) {
		return <></>
	}

	return (
		<AppLayout>
			<Container>
				<Box mb={20}>
					<Typography variant="h1" align="center" my={8}>
						Roles & Factions
					</Typography>
					{factions.map((faction, index) => (
						<ObjectivePanel key={index} faction={faction} />
					))}
				</Box>
				<Box mb={20}>
					<Typography variant="h1" align="center" my={8}>
						Gameplay Basics
					</Typography>
					<GameplaySection
						sections={[
							{
								image: require('../../assets/images/gameplay/day-night.png'),
								description: [
									'The game follows a cycle of day time and night time.',
									'During night time, players are not allowed to communicate with each other and skeletons will spawn around the map.',
									'When day time arrives, all remaining skeletons despawn and players are allowed to discuss.'
								]
							},
							{
								image: require('../../assets/images/gameplay/skeletons.png'),
								description: [
									'There are multiple types of skeletons that spawn during night time.',
									'A basic skeleton has a chance of dropping an emerald when killed.',
									'A lucky skeleton will always drop emeralds when killed.',
									'A special skeleton will drop items instead of emeralds.'
								]
							},
							{
								image: require('../../assets/images/gameplay/shops.png'),
								description: [
									'Emeralds are the game’s currency allowing players to purchase weapons and special items in shops.',
									'You can find a basic villager and a special villager on most shops to purchase anything.',
									'Using these items, find out the members of the opposing factions, annihilate them, and seize your victory.'
								]
							}
						]}
						tips={[
							'When the game starts, scatter around the map and wait for skeletons to spawn.',
							'If you want to kill skeletons faster for a night, you can purchase a "skeleton slicer".',
							'A villager should either prepare weapons to get some kills ("powerful bow", "sharp arrow", "stun grenade"), or stock up emeralds for a divination which is essential to advance in the game.',
							'A werewolf should purchase a "werewolf axe" rapidly and start killing or stock them up for later.',
							'A traitor should also try to purchase a "traitor’s guide" and behave smartly to support werewolves.',
							'A vampire should prepare weapons and observe other players carefully.'
						]}
					/>
				</Box>
				<Box mb={20}>
					<Typography variant="h1" align="center" my={8}>
						Items
					</Typography>
					<ItemSection
						items={[
							{
								name: 'Skeleton Punisher',
								description: 'A wooden stick distributed to all players dealing bonus damage to skeletons.',
								image: require('../../assets/images/items/skeleton_punisher.png')
							},
							{
								name: 'Exquisite Meat',
								description: 'The only food source in the game, needed for healing and running.',
								image: require('../../assets/images/items/exquisite_meat.png')
							},
							{
								name: 'Skeleton Slicer',
								description:
									'A sword that deals even more damage to skeletons, thus increasing the efficiency of emerald gathering just for one night.',
								image: require('../../assets/images/items/skeleton_slicer.png')
							},
							{
								name: 'Powerful Bow',
								description: 'A single-use bow that deals one-hit damage.',
								image: require('../../assets/images/items/powerful_bow.png')
							},
							{
								name: 'Sharp Arrow',
								description:
									'A single-use arrow that works along with the bow. Missed projectiles cannot be picked up.',
								image: require('../../assets/images/items/sharp_arrow.png')
							},
							{
								name: 'Stun Grenade',
								description: 'A grenade which immobilizes and gives blindness to the target for 5 seconds.',
								image: require('../../assets/images/items/stun_grenade.png')
							},
							{
								name: 'Invisibility Potion',
								description: 'Grants invisibility for 30 seconds.',
								image: require('../../assets/images/items/invisibility_potion.png')
							},
							{
								name: 'Swiftness Potion',
								description: 'Grants a minor speed boost during the entire game.',
								image: require('../../assets/images/items/swiftness_potion.png')
							},
							{
								name: 'Werewolf Axe',
								description: 'A werewolf-only item. Kills in one hit and breaks when used.',
								image: require('../../assets/images/items/werewolf_axe.png')
							},
							{
								name: "Traitor's Guide",
								description:
									'A traitor-only item. Gives the name of one werewolf randomly. It can be purchased as many times, but the same name can come up multiple times.',
								image: require('../../assets/images/items/traitors_guide.png')
							},
							{
								name: 'Light of Revelation',
								description: 'Applies glowing to all players except the user.',
								image: require('../../assets/images/items/light_of_revelation.png')
							},
							{
								name: 'Ash of the Dead',
								description: 'Tells the user which players are dead and which are not.',
								image: require('../../assets/images/items/ash_of_the_dead.png')
							},
							{
								name: 'Sneak Notice',
								description:
									'Can be used during night time and will send you a message if someone uses a divination on you during this night.',
								image: require('../../assets/images/items/sneak_notice.png')
							},
							{
								name: 'Protection',
								description:
									'Can be used once per night to survive one deadly hit. It has no effect on the vampire and werewolves.',
								image: require('../../assets/images/items/protection.png')
							},
							{
								name: 'Holy Star',
								description:
									'Hitting the vampire with it will kill him. Hitting a non-vampire will make the star vanish with no effect.',
								image: require('../../assets/images/items/holy_star.png')
							},
							{
								name: 'Cursed Spear',
								description:
									"A one-time use spear that can be used in melee or thrown. First hit applies a curse to the player which lasts all game. Hitting a cursed player kills him instantly. The second hit can be countered by a protection or the vampire's invincibility.",
								image: require('../../assets/images/items/curse_spear.png')
							},
							{
								name: 'Divination',
								description:
									'When purchased it disappears and adds 1 to your remaining divinations counter. A Divination lets you know the role of a player. But the traitor appear as a villager and the possessed as a werewolf. Use it by right-clicking a player skull. Usage is limited to once per night.',
								image: require('../../assets/images/items/divination.png')
							}
						]}
					/>
				</Box>
				<Box mb={20}>
					<Typography variant="h1" align="center" my={8}>
						Maps
					</Typography>
					<MapSection maps={maps} />
				</Box>
			</Container>
		</AppLayout>
	)
}
