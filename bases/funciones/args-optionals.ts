;(() => {

    const fullName = (firstName:string, lastName?:string): string => {
        return `${firstName} ${lastName || 'X'}`;
    }

    const user = fullName('Jose');
    console.log(user);
    
})()
