var mensaje = "hola";
// let mensaje = "adios"; No se puede declarar dos veces la misma variable
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje); // Imprime hola
var OPCIONES = "todas";
// OPCIONES = "ninguna"; No se puede cambiar el valor de una constante
// const OTRACONSTANTE: No se puede declarar una constante sin inicializarla
if (true) {
    var OPCIONES_1 = "ninguna"; // Se puede redeclarar en otro Scope
}
