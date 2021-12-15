"use strict";
// Construire le menu déroulant.
let select = document.createElement('select');
// Lui ajouter une première option neutre.
let i = 0;
select.options[i++] = new Option("Choisissez...", 0);
// Lui ajouter une option pour chacune des capitales.
Ville
	.capitalesUE()
	.forEach(ville => {
		select.options[i++] = new Option(ville.nom, ville.id);
	});
// L'accrocher au DIV out.
out.appendChild(select);
// Créer ici le DIV des données météo pour pouvoir le vider à chaque changement de ville.
let divMeteo = document.createElement('div');
out.appendChild(divMeteo);
// Quand un changement a lieu...
select.addEventListener('input', () => {
	// Vider le DIV météo.
	divMeteo.innerHTML = null;
	// Si une ville a été choisie...
	let idVille = parseInt(select.value);
	if (idVille !== 0) {
		// Instancier OWM pour charger les données météo.
		new OWM(select.value)
			.charger()
			.then(data => {
				// Créer les éléments HTML.
				let pDescription = document.createElement('p');
				pDescription.textContent = data.description;
				let imgIcone = new Image(100, 100);
				imgIcone.src = data.urlIcone;
				let pTempHygro = document.createElement('p');
				pTempHygro.textContent = `${data.tempMin}°C / ${data.tempMax}°C (${data.hygro}%)`;
				// Les accrocher au DIV météo.
				divMeteo.appendChild(pDescription);
				divMeteo.appendChild(imgIcone);
				divMeteo.appendChild(pTempHygro);
			})
			.catch(() => alert("Erreur !"));
	}
});
