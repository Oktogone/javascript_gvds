"use strict";
function resoudreApres2s(n) {
	// Simule un chargement de 2 secondes.
	return new Promise(resolve => setTimeout(() => resolve(n), 2000));
}

async function test1() {
	let a = await resoudreApres2s(1);
	let b = await resoudreApres2s(2);
	return a + b;
}
test1()
	.then(val => console.log(val)); // 3 après 4s.

async function test2() {
	let pA = resoudreApres2s(3);
	let pB = resoudreApres2s(4);
	return await pA + await pB;
}
test2()
	.then(val => console.log(val)); // 7 après 2s.
