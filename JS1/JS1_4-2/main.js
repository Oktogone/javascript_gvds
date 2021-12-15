"use strict";
// Opérateur d'affectation.
let n = 5;
// Opérateurs arithmétiques.
console.log(1 + 3 * 4 - 6 / 2);  // 10
console.log(((1 + 2) * 4 - 5) / 2);  // 3.5
console.log(178 % 5); // 3
console.log(2 ** 3); // 8
// Concaténation.
console.log("Bon" + "jour"); // Bonjour
// Opérateurs combinés.
n += 2; // n = n + 2
console.log(n); // 7
// Incrémentation / décrémentation.
n++; // n += 1
console.log(n); // 8
n--; // n -= 1
console.log(n); // 7
// Post / Pré-incrémentation / décrémentation.
let a, b;
a = 1;
b = a++;
console.log(a, b); // 2 1
b = ++a;
console.log(a, b); // 3 3
// Testez_vous...
console.log(a++ - b-- + ++a + b++); // ???



console.log(a, b); // ???
