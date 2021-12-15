"use strict";
// Instancier OWM pour charger les données météo.
new OWM(2759794)
	.charger()
	.then(data => console.log(data))
	.catch(() => alert("Erreur !"));
