let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

let {poder, nombre, clave} = avenger; // let { } Formato para destructuracion de objetos
// Se puede cambiar el orden


console.log(nombre, clave, poder);

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = avengers; // let [ ] Formato para destructuracion de arrays
// El orden debe ser secuencial

console.log(thor, capi, ironman);
