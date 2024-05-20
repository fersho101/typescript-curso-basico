"use strict";
;
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batisñal activada';
    };
    console.log(typeof activateBatSignal);
    let name = 'Jesus';
    const hello = (name) => 'Hello ' + name;
    console.log(hello(name));
})();
