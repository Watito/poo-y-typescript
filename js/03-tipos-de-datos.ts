//String 
let cadena: string = "Juanorellana.cl";

// Number
let numero: number = 12;

// Boolean
let verdadeor_falso: boolean = true;

// Any
let cualquiera : any = "hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

var years: any[] = ["DOCE",13,14];

// let vs var
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;

    console.log("Dentro del if "+numero1,numero2);

}
console.log("Fuera del if "+numero1,numero2);


console.log(cadena,numero,verdadeor_falso,cualquiera,lenguajes,years);
