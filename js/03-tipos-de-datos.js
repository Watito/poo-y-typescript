//String 
var cadena = "Juanorellana.cl";
// Number
var numero = 12;
// Boolean
var verdadeor_falso = true;
// Any
var cualquiera = "hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = ["DOCE", 13, 14];
// let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log("Dentro del if " + numero1_1, numero2);
}
console.log("Fuera del if " + numero1, numero2);
console.log(cadena, numero, verdadeor_falso, cualquiera, lenguajes, years);
