// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x!==y && x<y){
    return y;
  }
  return x;
}
obtenerMayor(10, 5);

function saludo() {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var max = arguments.length;
  var cont;
  for(cont = 0; cont <= max;cont++){
  if(arguments[cont] === "aleman"){
    return "Guten Tag!";      
  }else if(arguments[cont] === "mandarin"){
    return "Ni Hao!";
  }else if(arguments[cont]==="ingles"){
    return "Hello!";
  } else if(arguments[cont] === null || arguments[cont] === undefined ){
    return "Hola!";
  }
}
}
 
saludo("aleman", "mandarin", "ingles", "Latino");

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    
    if (numero === 10 || numero ===5){
        return true;
    }
    return false;
}
esDiezOCinco(6);
function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero>20 && numero <50){
    return true;
  }
  return false;
}

function esEntero() {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var cont = arguments.length;
  for(var i=0; i <=cont;cont++){
  if(arguments[i]-Math.floor(arguments[i]) === 0){
     return true; 
  }
  return false;
}
}
esEntero(5, 0.5, -20, 0);

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  
  if(numero%3 ===0 && numero % 5===0){
    return "fizzbuzz";
  }else if(numero % 5 ===0){
     return "buzz"; 
  }else if(numero % 3 ===0 ){
     return "fizz"; 
  } 
  return numero;
}
fizzBuzz(3);

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos}
  if(numero <2) return false;
  var primo = 0;
     for(var i=2;i<=numero;i++){   
        if(numero % i === 0){      
          primo++;
        }    
    }
    if(primo > 2){
        return false;
   }
    return true;
}
esPrimo(5);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
