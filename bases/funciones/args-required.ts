;(() => {

    const fullName = (firstName:string, lastName:string): string => {
        return `${firstName} ${lastName}`;
    }

    const user = fullName('Jose', 'Maria');
    console.log(user);
    
})()
