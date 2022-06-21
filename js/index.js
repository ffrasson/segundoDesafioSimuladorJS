/* 
* Este algoritmo se encarga de mostrar el menu y de solicitar el número de cabañas que desea arrendar.
* Si el usuario ingresa un número que no está entre 1 y 2, se le mostrará un mensaje de error.
* Si el usuario ingresa un número que es igual a ESC, se le mostrará un mensaje de salida.
* Luego pedirá la cantidad de adultos con un máximo de la cantidad de personas que puede arrendar.
* Luego pedirá la cantidad de niños con un máximo de la cantidad de personas que puede arrendar.
* Si el usuario ingresa un número que no está entre 0 y la cantidad de personas que puede arrendar, se le mostrará un mensaje de error.
*/

function oneCabin(adults, kids){
  let total = adults + kids;
      if (adults + kids >= 7 ){
                  /* Una alerta que se activa cuando el número de personas supera las 6. */
                  alert('Sobrepasa el limite de personas por cabaña, contrate dos si desea mas capacidad');
              }	
  return total;
}

function twoCabin(adults, kids){
  let total = adults + kids;
  if (adults + kids >= 13 ){
                  /* Una alerta que se activa cuando el número de personas supera las 12. */
                  alert('Sobrepasa el limite de personas máximo por cabaña, si son mas personas favor contactar a nuestro personal');
              }	
  return total;
}

function showPrice(total){ //muestra el total de personas
  alert('El total de personas ingresadas es : '+ total);
}

function showMenu(menu){ // muestra el menú
  let options = prompt('Número de cabañas que desea arrendar. (ESC) para salir \n 1. Una cabaña hasta 6 personas \n 2. Dos cabañas hasta 12 personas \n');
  return options;
}

function quotation(){ //cotizamos las cabañas
  let selectedOption = showMenu(); 
  while(selectedOption !== 'ESC'){
      if(!isNaN(selectedOption !== '')){
          let adults = parseInt(prompt('Ingrese el número de adultos'));
          let kids = parseInt(prompt('Ingrese el número de niños'));
              if (adults <= 0 && kids !== 0){
                  alert('No se puede arrendar una cabañas sin adultos');
              }
              selectedOption = parseInt(selectedOption);
               //Switch seleccionar la opción
              
              switch(selectedOption){
                  case 1: // una cabaña
                      let totalOne = oneCabin(adults, kids);
                      showPrice(totalOne);
                      break;
                  case 2: // dos cabañas
                      let totalTwo = twoCabin(adults, kids);
                      showPrice(totalTwo);
                      break;
                  default:
                      alert('Opción no válida');
                      break;
              }
      }else{
          alert('Seleccione una opción válida');
      }
      selectedOption = showMenu();   
  }
}
/* Llamando a la función principal. */
quotation();