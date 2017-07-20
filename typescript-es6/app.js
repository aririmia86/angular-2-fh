function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    // quien es un parametro obligatorio de tipo string
    // objeto es un parametro por defecto con valor batiseñal
    // momento es un parametro opcional
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "tarde"); //Para darle valor a momento hay que definir objeto
// No es posible definir una funcion con el primer parametro opcional y el ultimo obligatorio
