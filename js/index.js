/* 
* El presente algoritmo se utilizará para mostrar el menu y solicitar la cantidad de campers que desea alquilar.
* Si el usuario ingresa un número que no está entre 1 y 2, se le mostrará un mensaje de error.
* Si el usuario ingresa un número que es igual a ESC, se le mostrará un mensaje de salida.
* Luego pedirá la cantidad de adultos con un máximo de la cantidad de personas que puede alquilar.
* Es condicion que por lo menos haya un adulto para alquilar.
* Luego pedirá la cantidad de niños con un máximo de la cantidad de personas que puede alquilar.
* Si el usuario ingresa un número que no está entre 0 y la cantidad de personas que puede alquilar, se le mostrará un mensaje de error.
*/

function unaCamper(adultos, niños){
  let total = adultos + niños;
      if (adultos + niños >= 7 ){
                  /* Una alerta que se activa cuando el número de personas supera las 6. */
                  alert('Sobrepasa el limite de personas por camper, contrate dos si desea mas capacidad');
              }	
  return total;
}

function dosCamper(adultos, niños){
  let total = adultos + niños;
  if (adultos + niños >= 13 ){
                  /* Una alerta que se activa cuando el número de personas supera las 12. */
                  alert('Sobrepasa el limite de personas máximo por camper, si son mas personas favor contactar a nuestro personal');
              }	
  return total;
}

function muestraCantidad(total){ //muestra el total de personas
  alert('El total de personas ingresadas es : '+ total);
}

function muestraMenu(menu){ // muestra el menú
  let opciones = prompt('Número de campers que desea alquilar. (ESC) para salir \n 1. Una camper hasta 6 personas \n 2. Dos campers hasta 12 personas \n');
  return opciones;
}

function alquiler(){ //cotizamos el alquiler de las campers en funcion de la cantidad de personas ingresadas
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
                  case 1: // una camper
                      let totalUno = unaCamper(adultos, niños);
                      muestraCantidad(totalUno);
                      break;
                  case 2: // dos camper
                      let totalDos = dosCamper(adultos, niños);
                      muestraCantidad(totalDos);
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