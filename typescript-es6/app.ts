let mensaje = "hola";
// let mensaje = "adios"; No se puede declarar dos veces la misma variable

if(true) {
  let mensaje = "adios";
}

console.log(mensaje); // Imprime hola

const OPCIONES = "todas";

// OPCIONES = "ninguna"; No se puede cambiar el valor de una constante
// const OTRACONSTANTE: No se puede declarar una constante sin inicializarla

if(true) {
  const OPCIONES = "ninguna"; // Se puede redeclarar en otro Scope
}
