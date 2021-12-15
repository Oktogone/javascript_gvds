"use strict";
let logo = 'js';
function clic(evt) {
	logo = logo === 'js' ? 'vscode' : 'js';
	evt.target.src = `img/logo_${logo}.png`;
}
