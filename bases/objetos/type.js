"use strict";
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        },
    };
    let Superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super speed', 'Strong'],
        getName() {
            return this.name;
        },
    };
    console.log(flash, Superman);
})();
