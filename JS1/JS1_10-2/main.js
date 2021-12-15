"use strict";
// Paramètre par défaut.
function somme(a, b, c = 0) {
	return a + b + c;
}
console.log(somme(12, 8, 13)); // 33
console.log(somme(12, 8)); // 20
// Exemple avec la base décimal par défaut de parseInt().
console.log(parseInt("100")); // 100
console.log(parseInt("100", 2)); // 4
// Rest parameter.
function moyenne(prenom, ...notes) {
	let somme = 0;
	for (let note of notes) {
		somme += note;
	}
	let moy = (somme / notes.length) || 0;
	console.log(prenom, moy);
}
moyenne("Bob", 12, 8, 13); // 11
moyenne("Bob"); // 0
