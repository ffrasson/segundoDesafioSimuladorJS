/* ALGORITMO PARA ALQUILER DE CAMPER VAN (MOTORHOME)

- El presente algoritmo se utilizará para mostrar un menu de alquiler de Campers y permitir seleccionar el modelo de acuerdo a la cantidad de personas ingresadas.
- Si el usuario ingresa un número que no está entre 1 y 3, se le mostrará un mensaje de error.
- Si el usuario ingresa un valor que es igual a ESC, se le mostrará un mensaje de salida.
- Luego pedirá la cantidad de adultos con un máximo de la cantidad de personas que puede alquilar según el modelo de la Camper.
- Es condicion que por lo menos haya un adulto para alquilar.
- Luego pedirá la cantidad de niños con un máximo de la cantidad de personas que puede alquilar según el modelo de la camper y acumulando con la cantidad de adultos ingresadas previamente.
- Si el usuario ingresa un número que no está entre 0 y la cantidad de personas máximas según modelo de la camper posible de alquilar, se le mostrará un mensaje de error.

*/

function camperUno(adultos, niños){
  let total = adultos + niños;
      if (adultos + niños >= 7 ){
                  /* Indica un alerta que se activa cuando se supera la cantidad de 6 personas (adultos + niños) ingresadas. */
                  alert('Sobrepasa el limite de personas para este modelo de camper, contrate el modelo DOS o TRES si desea más capacidad');
              }	
  return total;
}

function camperDos(adultos, niños){
  let total = adultos + niños;
  if (adultos + niños >= 13 ){
                  /* Indica una alerta que se activa cuando se supera la cantidad de 12 personas (adultos + niños) ingresadas. */
                  alert('Excede el limite de personas máximo para este modelo de camper, contrate el modelo TRES si desea mayor capacidad');
              }
              
  return total;
}

function camperTres(adultos, niños){
  let total = adultos + niños;
  if (adultos + niños >= 19 ){
                  /* Indica una alerta que se activa cuando se supera la cantidad de 18 personas (adultos + niños)ingresadas. */
                  alert('Excede el limite de personas máximo de los modelos de camper disponibles, si son mas personas favor contactarse vía correo electrónico a lococamper@gmail.com. Muchas gracias');
              }	
  return total;
}

function muestraCantidad(total){ //muestra el total de personas (adultos + niños).
  alert('El total de personas ingresadas es : '+ total);
}

function muestraMenu(menu){ // muestra el menú de modelos de Camper a seleccionar.
  let opciones = prompt('Modelo de campers que desea alquilar. (ESC) para salir \n 1. Camper UNO hasta 6 personas \n 2. Camper DOS hasta 12 personas \n 3. Camper TRES hasta 18 personas');
  return opciones;
}

function alquiler(){ //cotizamos el alquiler de las campers en funcion de la cantidad de personas ingresadas (adultos + niños).
  let opcionSeleccionada = muestraMenu(); 
  while(opcionSeleccionada !== 'ESC'){
      if(!isNaN(opcionSeleccionada !== '')){
          let adultos = parseInt(prompt('Ingrese la cantidad de adultos'));
          let niños = parseInt(prompt('Ingrese la cantidad de niños'));
              if (adultos <= 0 && niños !== 0){
                  alert('No se puede alquilar una camper sin adultos');
              }
              opcionSeleccionada = parseInt(opcionSeleccionada);
               //Switch seleccionar la opción
              
              switch(opcionSeleccionada){
                  case 1: // camper uno
                      let totalUno = camperUno(adultos, niños);
                      muestraCantidad(totalUno);
                      break;
                  case 2: // camper dos
                      let totalDos = camperDos(adultos, niños);
                      muestraCantidad(totalDos);
                      break;
                  case 3: // camper tres
                      let totalTres = camperTres(adultos, niños);
                      muestraCantidad(totalTres);
                      break;
                  default:
                      alert('Opción no válida');
                      break;
              }
      }else{
          alert('Seleccione una opción válida');
      }
      opcionSeleccionada = muestraMenu();   
  }
}
/* Llamando a la función principal. */
alquiler();