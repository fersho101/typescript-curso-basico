"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    flash = {
        name: 'Otro nombre',
        age: 60,
        powers: ['Super poder'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();