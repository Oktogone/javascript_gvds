"use strict";
class Stylo {
	constructor(marque) {
		this.marque = marque;
	}
	toString() {
		return `Stylo ${this.marque}`;
	}
}
let stylo = new Stylo("Bic");
console.log(`Ceci est un ${stylo}`);
