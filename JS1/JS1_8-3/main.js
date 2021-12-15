"use strict";
// Destructuring assignment.
let a, b, c;
[a, b] = [1, 2];
console.log(a, b); // 1 2
[a, b, c] = [3, 4];
console.log(a, b, c); // 3 4 undefined
[a, b, c = 0] = [5, 6];
console.log(a, b, c); // 5 6 0
[a, , b] = [7, 8, 9];
console.log(a, b); // 7 9
// Très utile pour permuter 2 valeurs.
[a, b] = [b, a];
console.log(a, b); // 9 7
// Sinon, l'échange nécessite une variable temporaire.
let temp = a;
a = b;
b = temp;
console.log(a, b); // 7 9
