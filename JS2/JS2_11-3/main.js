"use strict";
let url = 'https://oktogone.net/movies/movies.php';
let fd = new FormData();
fd.append('show', 3);
fetch(url, {
	method: 'post',
	body: fd
})
	.then(reponse => {
		return reponse.ok ? reponse.json() : Promise.reject(Error(reponse.statusText));
	})
	.then(film => console.log(`"${film.title}" de ${film.director}`))
	.catch(erreur => console.log(`Erreur: ${erreur.message}`));
