function activar(quien:string,
                 objeto:string = "batiseñal",
                 momento?:string) {
  // quien es un parametro obligatorio de tipo string
  // objeto es un parametro por defecto con valor batiseñal
  // momento es un parametro opcional
  let mensaje:string;

  if (momento) {
      mensaje = `${quien} activó la ${objeto} en la ${momento}`;
  } else {
    mensaje = `${quien} activó la ${objeto}`;
  }

  console.log(mensaje);
}

activar("Gordon", "batiseñal", "tarde"); //Para darle valor a momento hay que definir objeto

// No es posible definir una funcion con el primer parametro opcional y el ultimo obligatorio
