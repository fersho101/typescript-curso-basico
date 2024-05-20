;(() => {
	type Hero = {
		name: string
		age?: number
		powers: string[]
		getName?: () => string
	}

	let myCustomVariable: string | number | Hero = 'fer'
	console.log(typeof myCustomVariable)

    myCustomVariable = 20
	console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        age:43,
        powers:['Rich']
    }
	console.log(typeof myCustomVariable)


})()
