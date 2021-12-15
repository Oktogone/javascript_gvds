"use strict";
let tab = [4, 2, 1, 3];
console.log(tab.length); // 4
// Extraire le dernier élément.
console.log(tab.pop()); // 3
console.log(tab); // [4, 2, 1]
// Ajouter à la fin.
tab.push(3);
console.log(tab); // [4, 2, 1, 3]
// Extraire le premier.
console.log(tab.shift()); // 4
console.log(tab); // [2, 1, 3]
// Ajouter au début.
tab.unshift(4);
console.log(tab); // [4, 2, 1, 3]
// Joindre en string.
console.log(tab.join('-')); // "4-2-1-3"
// Trier.
tab.sort();
console.log(tab); // [1, 2, 3, 4]
// Parcourir avec forEach().
tab.forEach(function (e) {
	console.log(e);
});
// Traiter avec map().
let tab2 = tab.map(function (e) {
	return e * 2;
});
console.log(tab2); // [2, 4, 6, 8]
// Filtrer avec filter().
let tab3 = tab.filter(function (e) {
	return e % 3 === 0;
});
console.log(tab3); // [3]
