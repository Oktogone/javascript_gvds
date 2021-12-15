class Ville {
	nom;
	id;
	constructor(nom, id) {
		this.nom = nom;
		this.id = id;
	}
	static capitalesUE() {
		return [
			new Ville("Amsterdam", 2759794),
			new Ville("Athènes", 264371),
			new Ville("Berlin", 2950159),
			new Ville("Bratislava", 3060972),
			new Ville("Bruxelles", 2800866),
			new Ville("Bucarest", 683506),
			new Ville("Budapest", 3054643),
			new Ville("Copenhague", 2618425),
			new Ville("Dublin", 2964574),
			new Ville("Helsinki", 658225),
			new Ville("La Valette", 2562305),
			new Ville("Lisbonne", 2267057),
			new Ville("Ljubljana", 3196359),
			new Ville("Luxembourg", 2960316),
			new Ville("Madrid", 3117735),
			new Ville("Nicosie", 146268),
			new Ville("Paris", 2988507),
			new Ville("Prague", 3067696),
			new Ville("Riga", 456172),
			new Ville("Rome", 3169070),
			new Ville("Sofia", 727011),
			new Ville("Stockholm", 2673730),
			new Ville("Tallinn", 588409),
			new Ville("Varsovie", 756135),
			new Ville("Vienne", 2761369),
			new Ville("Vilnius", 593116),
			new Ville("Zagreb", 6618983),
		];
	}
}
