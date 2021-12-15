"use strict";
// Multi-dimensions.
let tab = [[10, 20, 30], [1, 2]];
console.log(tab[0][2]); // 30
console.log(tab.length); // 2
console.log(tab[0].length); // 3
console.log(tab[1].length); // 2
// Parcours avec for.
for (let i = 0; i < tab.length; i++) {
	for (let j = 0; j < tab[i].length; j++) {
		console.log(tab[i][j]);
	}
}
// Parcours avec for/of.
for (const t of tab) {
	for (const e of t) {
		console.log(e);
	}
}
