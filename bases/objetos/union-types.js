"use strict";
;
(() => {
    let myCustomVariable = 'fer';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Rich']
    };
    console.log(typeof myCustomVariable);
})();
