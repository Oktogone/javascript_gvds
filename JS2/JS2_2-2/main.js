"use strict";
// Propriété document
console.log(document.title);
// Propriété location
setTimeout(() => location.href = "https://google.fr", 2000);
// Méthode alert()
alert("Hello");
// Méthode confirm()
console.log(confirm("OK ?")); // Retourne true ou false.
// Méthode setInterval() pour un compte à rebours.
let k = 10;
let itv = setInterval(() => {
	console.log(k--);
	if (k < 0) {
		clearInterval(itv);
	}
}, 1000);
// Méthode print()
print();
