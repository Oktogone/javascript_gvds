"use strict";
let url = 'https://oktogone.net/movies/movies.php?action=list';
//let url = 'http://httpstat.us/500';
fetch(url)
	.then(reponse => {
		return reponse.ok ? reponse.json() : Promise.reject(Error(reponse.statusText));
	})
	.then(films => console.log(films))
	.catch(erreur => console.log(`Erreur: ${erreur.message}`));
