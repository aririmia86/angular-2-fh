var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; }; // Arrow function: Hace lo mismo que lo de arriba;
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; }; // Arrow function: Hace lo mismo que lo de arriba;
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
