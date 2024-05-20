"use strict";
;
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || 'X'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'X'}`;
        }
    };
    const user = fullName('Joselito', 'Vazconselos', false);
    console.log(user);
})();
