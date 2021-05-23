//TIPOS DE DATOS PRIMITIVOS


//tipo texto
let amigoDeLu = "Daniel";
//tipo number
let edadDeLu = 22;
//Booleano solo 2 (true, false)
let cosa = false;
//undefined tipo indefinido
let cosita = undefined;
let puerta;
//tipo de dato null
let q=null;

console.log(q);


//tipo de varialbes let, const y var(no usar)


/* PARA MUTAR UNA VARIABLE USAR LET (MUTAR)
let nombre = "daniel";
nombre = "luis";

console.log(nombre);
*/

let suma1 = 5;
let suma2 = 10;

let sumaTotal = suma1 + suma2;
console.log(sumaTotal);

/* CONCATENAR
let nombreLucazmax = 'lucazmax';
let nombreZquas = 'Zquas';

console.log(nombreLucazmax + nombreZquas);
*/

//template
let manzana = `roja`;
let manzana1 = `blue`;
let manzana2 = `yellow`;

console.log(`manzana color1 ${manzana} 
la otra ${manzana1} y laaa otra ${manzana2}`);

let nombre1 = "kinomoto";
let nombre2 = "coco";

let pesoKin = 100;
let alturaKin = 1.80;

let pesoCo = 200;
let alturaCo = 1.70; 

let imcKin = pesoKin / (alturaKin * alturaKin);
let imcCo = pesoCo / (alturaCo * alturaCo);

if (imcCo<imcKin) {
    console.log("Coco tiene mayor imc que kinomoto");
}else{
    console.log("Kinomoto tiene mayor imc que coco");
}


console.log(`El imc de ${nombre1} es ${imcKin} y el de ${nombre2} es ${imcCo}`);