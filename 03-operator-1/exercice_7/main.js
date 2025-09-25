// Exercice 7
// Écrivez votre code ici
// Déclaration des variables
let ageEnfant = 10;                   
let agePere = ageEnfant * 2;          // le double de l'enfant
let ageMere = agePere - 5;            // âge du père moins 5
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2); // double de la mère + moitié de l'enfant
let ageOncle = agePere + 10;          // âge du père plus 10

module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };
