function getNombre() {
  return "Fernando";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto:string = "Hola, " + nombre + " " + apellido + " (" + edad + ")";

let texto:string = `Hola, ${nombre} ${apellido} (${edad}) `;
let textoMultiLinea:string = `Hola,
${nombre} ${apellido}
(${edad}) `;
let texto2:string = ` ${getNombre()} `; //Dentro de ${} se puede incluir JS puro + 

console.log(texto);
console.log(textoMultiLinea);
console.log(texto2);
