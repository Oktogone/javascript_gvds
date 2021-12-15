"use strict";
// Passage par valeur d'un nombre (type primitif).
function f1(n) {
	n++;
}
let a = 3;
f1(a);
console.log(a); // 3
// Passage par référence d'un objet.
function f2(tab) {
	tab[0]++;
}
let t = [3];
f2(t);
console.log(t); // [4]
