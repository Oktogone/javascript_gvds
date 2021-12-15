"use strict";
class Stylo {
	marque;
	constructor(marque) {
		this.marque = marque;
	}
	ecrire() {
		console.log(`Le stylo ${this.marque} écrit`);
	}
}
class StyloBille extends Stylo {
	couleur;
	constructor(marque, couleur) {
		super(marque); // Obligatoire avant this !
		this.couleur = couleur;
	}
	// Redéfinition.
	ecrire() {
		super.ecrire();
		console.log(`Le stylo ${this.marque} ${this.couleur} écrit`);
	}
	// Nouvelle méthode.
	fuir() {
		console.log(`Le stylo ${this.marque} ${this.couleur} fuit`);
	}
}
// Programme principal.
let styloBille = new StyloBille("Bic", "rouge");
styloBille.ecrire();
styloBille.fuir();
