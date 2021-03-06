"use strict";
// Syntaxe à crochets.
let tab = ['Bob', 'Max', 'Tom', 123];
console.log(tab[0]); // Bob
console.log(tab[3]); // 123
console.log(tab.length); // 4
// Parcours avec for.
for (let i = 0; i < tab.length; i++) {
	console.log(tab[i]);
}
console.log(i); // ERREUR
// Parcours avec for/of.
for (const e of tab) {
	console.log(e);
}
