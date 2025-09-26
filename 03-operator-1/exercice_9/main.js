// Exercice 9
// Écrivez votre code ici

let maisonFamiliale = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let totalHeritage = maisonFamiliale + terrains + liquidites;

partDesEnfants = totalHeritage * 0.75;
partDuConjointEtFreres = totalHeritage * 0.25;

let paul = partDesEnfants / 3;
let marie = partDesEnfants / 3;
let eric = (partDesEnfants / 3) / 2;
let clair = (partDesEnfants / 3) / 2;
let madameMukuna = partDuConjointEtFreres / 3;
let joseph = partDuConjointEtFreres / 3;
let sarah = partDuConjointEtFreres / 3;
console.log("Héritage de Paul: " + paul + " CDF");
console.log("Héritage de Marie: " + marie + " CDF");
console.log("Héritage de Éric: " + eric + " CDF");  
console.log("Héritage de Claire: " + clair + " CDF");
console.log("Héritage de Madame MUKUNA: " + madameMukuna + " CDF");
console.log("Héritage de Joseph: " + joseph + " CDF");
console.log("Héritage de Sarah: " + sarah + " CDF");


module.exports = {
  paul,
  marie,
    eric,
    clair,
    madameMukuna,
    joseph,
    sarah,
};
