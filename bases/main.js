"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
;
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downy Jr',
        vison: 'Paul Bettany',
        activo: true,
        poder: 1500.1201,
    };
    const printAvengers = (_a) => {
        var { ironman, vison } = _a, resto = __rest(_a, ["ironman", "vison"]);
        console.log(avengers.vison);
        console.log(ironman);
        console.log(vison);
        console.log(resto);
    };
    const avengerArr = ['Capitan America', 'ironman', 'Hulk', 'Magneto'];
    const [capi, ironman] = avengerArr;
})();
;
(() => {
    const ironman = {
        nom: 'Ironman',
        weapon: 'Armor suit',
    };
    const capAmerica = {
        nom: 'Capitan America',
        weapon: 'shield',
    };
    const thor = {
        nom: 'Thor',
        weapon: 'Hammer',
    };
    const avengers = [ironman, thor, capAmerica];
    for (const avenger of avengers) {
    }
})();
;
(() => {
    var a = 'Fernando';
    const NOMBRE = 'Corral';
    const getName = () => {
    };
})();
//# sourceMappingURL=main.js.map