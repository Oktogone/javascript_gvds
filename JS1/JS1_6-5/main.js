"use strict";
// Rupture break.
for (let n = 0; n < 10; n++) {
	if(n==5){
		break; // Sortie de boucle
	}
	console.log(n);
}

// Rupture continue.
for (let n = 0; n < 10; n++) {
	if(n % 2 === 0){
		continue; // Tour suivant
	}
	console.log(n);
}
