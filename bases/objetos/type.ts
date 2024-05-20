;(() => {
	type Hero = {
		name: string
		age?: number
		powers: string[]
		getName?: () => string
	}

	let flash: Hero = {
		name: 'Barry Allen',
		age: 24,
		powers: ['Super speed', 'Time travel'],
		getName() {
			return this.name
		},
	}

	let Superman: Hero = {
		name: 'Clark Kent',
		age: 40,
		powers: ['Super speed', 'Strong'],
		getName() {
			return this.name
		},
	}

    console.log(flash, Superman);
    
})()
