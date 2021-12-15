"use strict";
class Stylo {
	marque;
	#ref;
	constructor(marque, ref) {
		this.marque = marque;
		this.#ref = ref;
	}
	ecrire() {
		console.log(`Le stylo ${this.marque} ${this.#ref} écrit`);
	}
}
let stylo = new Stylo("Bic", "STB123456");
console.log(stylo.marque);
stylo.#ref = "ZHK"; // ERREUR
