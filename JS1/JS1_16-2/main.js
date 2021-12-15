"use strict";
let bernard = new Boulanger("Bernard");
let baguette = new Produit("baguette");
let croissant = new Produit("croissant");
let painDeMie = new Produit("pain de mie");
bernard.fabriquer(baguette, 80);
bernard.fabriquer(croissant, 60);
bernard.fabriquer(painDeMie, 20);
bernard.bilan();
