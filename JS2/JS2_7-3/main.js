"use strict";
let logo = 'js';
// Récupérer une référence à l'élément IMG.
let img = out.querySelector('img');
// Ajout d'un écouteur lambda.
img.addEventListener('click', evt => {
	logo = logo == 'js' ? 'vscode' : 'js';
	evt.target.src = `img/logo_${logo}.png`;
}, false);
