class Patissier extends Boulanger {
	constructor(prenom) {
		super(prenom);
		console.log(`${this.prenom} est aussi un pâtissier`);
	}
	fabriquer(produit, quantite) {
		this.fabrications.push(new Fabrication(produit, quantite));
		console.log(`En ${produit instanceof Patisserie ? "pâtisserie" : "boulangerie"}, ${this.prenom} fabrique ${quantite} ${produit.nom}`);
	}
}