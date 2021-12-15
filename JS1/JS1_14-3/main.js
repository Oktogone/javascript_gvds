"use strict";
// Longueur.
console.log("Vive JavaScript".length); // 15
// Caractère à un indice.
console.log("Vive JavaScript".charAt(6)); // "a"
// Occurence d'une chaîne.
console.log("Vive JavaScript".indexOf("Java")); // 5
console.log("Vive JavaScript".indexOf("JAVA")); // -1
// Tranchage.
console.log("Vive JavaScript".split(' ')); // ["Vive", "JavaScript"]
// Sous-chaîne.
console.log("Vive JavaScript".substring(5)); // "JavaScript"
console.log("Vive JavaScript".substring(5, 9)); // "Java"
// Changement de casse.
console.log("Vive JavaScript".toUpperCase()); // "VIVE JAVASCRIPT"
console.log("Vive JavaScript".toLowerCase()); // "vive javascript"
// Ne pas employer le constructeur String() !
let s1 = "Hello";
let s2 = new String("Hello");
console.log(s1 === s2); // false
console.log(typeof s1); // string (type primitif)
console.log(typeof s2); // object (instance de String)
