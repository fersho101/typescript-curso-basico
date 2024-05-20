;(() => {

    const fullName = (firstName:string, lastName?:string, upper:boolean = true): string => {
        if(upper) {
            return `${firstName} ${lastName || 'X'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'X'}`
        }
    }

    const user = fullName('Joselito', 'Vazconselos', false);
    console.log(user);
    
})()
