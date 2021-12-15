"use strict";
// Créer un élément IMG pour le logo JS et l'ajouter au DIV out.
let logoJS = document.createElement('img');
logoJS.src = 'img/logo_js.png';
out.appendChild(logoJS);
// Créer un élément IMG pour le logo VSCode et l'insérer avant logoJS :
let logoVSCode = document.createElement('img');
logoVSCode.src = 'img/logo_vscode.png';
out.insertBefore(logoVSCode, logoJS);
// Supprimer logoJS.
logoJS.remove();
// Faut-il toujours passer par createElement() ?
// Quelques rares éléments comme IMG ont un constructeur :
let logo = new Image();
logo.src = 'img/logo_js.png';
out.insertBefore(logo, logoVSCode);
// Quelques rares autres ont des méthodes dédiées :
let table = document.createElement('table');
let tr = table.insertRow();
let td = tr.insertCell();
td.textContent = "OK";
out.appendChild(table);
