;(() => {
	type Avenger = {
		nom: string
		weapon: string
	}

	const ironman: Avenger = {
		nom: 'Ironman',
		weapon: 'Armor suit',
	}
	const capAmerica: Avenger = {
		nom: 'Capitan America',
		weapon: 'shield',
	}
	const thor: Avenger = {
		nom: 'Thor',
		weapon: 'Hammer',
	}

	const avengers: Avenger[] = [ironman, thor, capAmerica]

	for (const avenger of avengers) {
		// console.log(avenger.nom, avenger.weapon)
	}
})()
