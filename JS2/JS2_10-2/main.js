"use strict";
// Créer une promesse.
let p = new Promise((resolve, reject) => {
	// Simuler aléatoirement un succès ou un échec.
	let test = Math.random() < .5;
	console.log(test);
	// Attendre 2s avant de décider si succès ou échec et transmettre la valeur d'aboutissement.
	setTimeout(() => test ? resolve("OK") : reject("KO"), 2000);
})
	// Traiter le résultat de la promesse en récupérant la valeur d'aboutissement.
	.then(val => console.log("SUCCES", val))
	.catch(val => console.log("ECHEC", val));
