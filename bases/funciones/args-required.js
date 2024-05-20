"use strict";
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const user = fullName('Jose', 'Maria');
    console.log(user);
})();
