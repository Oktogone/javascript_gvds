"use strict";
class Stylo {
	marque;
	static nb = 0;
	constructor(marque) {
		this.marque = marque;
		Stylo.nb++;
	}
	ecrire() {
		console.log(`Le stylo ${this.marque} écrit`);
	}
	static denombrer() {
		console.log(`Il y a ${Stylo.nb} stylos`);
	};
}
// Programme principal
new Stylo("Bic");
new Stylo("Pentel");
console.log(Stylo.nb);
Stylo.denombrer();
