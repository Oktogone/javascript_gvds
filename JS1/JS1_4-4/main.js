"use strict";
// Conversions implicites.
let a = "3", b = 5;
console.log(a + b);     // "35"
console.log(b - a);     // 2
console.log(a + true);  // "3true"
console.log(a + false); // "3false"
console.log(b + true);  // 6
console.log(b + false); // 5
console.log(1 / 0);     // Infinity
console.log(-1 / 0);    // -Infinity
console.log(0 / 0);     // NaN
// NaN est affectable.
let x = NaN;
console.log(x); // NaN
// NaN n'est pas comparable.
console.log(x === NaN); // false !!!
console.log(isNaN(x)); // true
// Conversions explicites.
a = parseInt(a);
console.log(typeof a);
console.log(parseInt(3.9)); // 3
console.log(parseFloat("3.9")); // 3.9
