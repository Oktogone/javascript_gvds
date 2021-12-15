// Mode strict.
"use strict";
// Déclarer une variable.
let n = 5;
// Déclarer plusieurs variables en une ligne.
let a = 1, b = 2, c;
console.log(a, b, c);
// Nommer les variables en camelCase.
let tauxDeTva = 0.2;
// Littéraux numériques...
//   en décimal
let x = -123.45;
//   en décimal, notation scientifique
x = 12e3; // 12000
//   en hexadécimal
x = 0x7B; // 123
// Littéraux chaînes de caractères...
//   entre simples quotes
let s = 'JavaScript';
s = 'J\'aime JavaScript';
//   entre doubles quotes
s = "J'aime JavaScript";
s = "J'aime \"mon\" JavaScript";
//   entre back-quotes (ou back-ticks)
s = `J'aime "mon" JavaScript`;
console.log(`Je dis : ${s}`);
// Littéraux booléens
let ok = true;
ok = false;
// Constantes en SNAKE_CASE.
const PI_SUR_2 = 3.1416 / 2;
//PI_SUR_2 = 5; // ERREUR
