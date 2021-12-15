"use strict";
// Variables : utilisation avant déclaration = ERREUR
n = 2; // ERREUR
let n;

// Fonctions : appel avant déclaration = OK
f();
function f() {
	console.log(n);
}
