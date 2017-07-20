let nombre:string;
nombre = "Peter";
//nombre = 123; //No se puede cambiar el tipo de la variable
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();

hoy = new Date('2020-10-21');

console.log(hoy);

let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
  nombre: "Peter",
  edad: 20
}

spiderman = {
  nombre: "Juan",
  edad: 30,
  //poder: "trepar paredes" No se pueden añadir propiedades
}
