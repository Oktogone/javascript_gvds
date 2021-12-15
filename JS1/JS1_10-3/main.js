"use strict";
// Fonction variadique.
function moyenne() {
	let somme = 0;
	for (let i = 0; i < arguments.length; i++) {
		somme += arguments[i];
	}
	let moy = (somme / arguments.length) || 0;
	console.log(moy);
}
moyenne(12, 8, 13); // 11
moyenne(); // 0
// Spread operator.
let notes = [12, 8, 13];
moyenne(...notes); // 11
