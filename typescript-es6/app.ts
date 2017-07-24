let prom1 = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Promesa terminada");

    // Termina bien
    //resolve();

    // Termina mal
    reject();
  }, 1500);
});

console.log("Paso 1");

prom1.then(
  function(){
  console.log("Ejecutarme cuando se termine bien");
  },
  function() {
    console.error("Ejecutar si algo sale mal");
  });

  console.log("Paso 2");
