"use strict";
out.textContent = "Vive JavaScript";
// Accès à UNE propriété CSS (AVEC camelCase)
out.style.fontSize = '30px';
// Accès à PLUSIEURS propriétés CSS (SANS camelCase)
out.style.cssText = 'color: blue; font-size: 50px';
// Suppression d'une propriété.
out.style.color = null;
// Ajout de classes (méthode variadique).
out.classList.add('titre', 'fond');
// Suppression de classes (méthode variadique).
out.classList.remove('fond');
