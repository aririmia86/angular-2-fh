var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
var poder = avenger.poder, nombre = avenger.nombre, clave = avenger.clave; // let { } Formato para destructuracion de objetos
// Se puede cambiar el orden
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2]; // let [ ] Formato para destructuracion de arrays
// El orden debe ser secuencial
console.log(thor, capi, ironman);
