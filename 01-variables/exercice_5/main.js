// Définition de la fonction
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Exemple d'utilisation
let tempC = 25;
console.log(tempC + "°C correspond à " + celsiusToFahrenheit(tempC) + "°F");

// Export sous forme d'objet pour Jest
module.exports = { celsiusToFahrenheit };
