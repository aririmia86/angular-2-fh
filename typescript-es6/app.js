function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto:string = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ") ";
var textoMultiLinea = "Hola,\n" + nombre + " " + apellido + "\n(" + edad + ") ";
var texto2 = " " + getNombre() + " "; //Dentro de ${} se puede incluir JS puro + 
console.log(texto);
console.log(textoMultiLinea);
console.log(texto2);
