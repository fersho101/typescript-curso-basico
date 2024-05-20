;(() => {

    //Ejercicio 1
	// let flash: {
	// 	name: string
	// 	age?: number
	// 	powers: string[]
	// 	getName: () => string
	// } = {
	// 	name: 'Barry Allen',
	// 	age: 24,
	// 	powers: ['Super speed', 'Time travel'],
    //     getName() {
    //         return this.name
    //     },
	// }

	// flash = {
	// 	name: 'Otro nombre',
	// 	age: 60,
	// 	powers: ['Super poder'],
	// 	getName() {
	// 		return this.name
	// 	},
	// }

	// console.log(flash.getName())

    //Ejercicio 2

    let flash: {
		name: string
		age?: number
		powers: string[]
		getName: () => string
	} = {
		name: 'Barry Allen',
		age: 24,
		powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name
        },
	}

    let Superman: {
		name: string
		age?: number
		powers: string[]
		getName: () => string
	} = {
		name: 'Clark Kent',
		age: 40,
		powers: ['Super speed', 'Strong'],
        getName() {
            return this.name
        },
	}

})()
