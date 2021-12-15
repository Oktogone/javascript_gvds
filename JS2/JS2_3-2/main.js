"use strict";
// Sélection du premier élément portant la classe "titre".
let e = document.querySelector('.titre');
console.log(e.textContent); // 1
console.log(e.innerHTML);   // <strong>1</strong>
// Sélection de tous les éléments portant la classe "titre".
let tab = document.querySelectorAll('.titre');
for (e of tab) {
	console.log(e.textContent); // 1 2
}
// JS crée automatiquement une variable pour tous les éléments avec ID.
console.log(out);
// Sélection dans le contexte d'un élément.
console.log(out.querySelector('div').textContent); // 2
