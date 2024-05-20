"use strict";
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'X'}`;
    };
    const user = fullName('Jose');
    console.log(user);
})();
