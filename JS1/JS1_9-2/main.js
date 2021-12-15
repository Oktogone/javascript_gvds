"use strict";
// Déclaration d'une fonction.
function bravo(prenom, points) {
	// Afficher un message de félicitations.
	console.log(`Bravo ${prenom}, vous avez gagné ${points} points !`);
	// Retourner un bonus aléatoire entre 1 et 1000.
	return parseInt(Math.random() * 100 + 1);
}

// Appel d'une fonction.
let bonus = bravo("Bob", 50);
console.log(`Et vous avez un bonus de ${bonus} points !`)
