;(() => {
	type Avengers = {
		nick: string
		ironman: string
		vison: string
		activo: boolean
		poder: number
	}

	const avengers: Avengers = {
		nick: 'Samuel L. Jackson',
		ironman: 'Robert Downy Jr',
		vison: 'Paul Bettany',
		activo: true,
		poder: 1500.1201,
	}

	// const {poder, vison} = avengers

	// console.log(poder, vison.toUpperCase())
	// console.log(Number(poder.toFixed(2)))

	const printAvengers = ({ ironman, vison, ...resto }: Avengers) => {
		console.log(avengers.vison)
		console.log(ironman)
		console.log(vison)
		console.log(resto)
	}
	// printAvengers(avengers)


    const avengerArr: string[] = ['Capitan America', 'ironman', 'Hulk', 'Magneto']
    // const ironman = avengerArr[1]
    const [capi,ironman] = avengerArr
    // console.log({ironman, capi})






})()
