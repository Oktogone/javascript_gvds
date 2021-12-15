"use strict";
class Stylo { }
class StyloBille extends Stylo { }
let stylo = new Stylo();
let styloBille = new StyloBille();
console.log(stylo instanceof Stylo); // true
console.log(stylo instanceof StyloBille); // false
// Tout stylo bille est un stylo.
console.log(styloBille instanceof Stylo); // true
console.log(styloBille instanceof StyloBille); // true
// Tout objet hérite de Object.
console.log(stylo instanceof Object); // true
console.log(styloBille instanceof Object); // true
console.log([] instanceof Object); // true
