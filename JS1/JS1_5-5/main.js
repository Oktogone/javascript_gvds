"use strict";
// Les valeurs "fausses" en JS : false, undefined, NaN, null, 0, ''
console.log(false || undefined || NaN || null || 0 || '');
// Short-circuit operators.
let a = 2, b = 0;
a > 2 && (b = 1);
console.log(b);
a > 2 || (b = 3);
console.log(b);
