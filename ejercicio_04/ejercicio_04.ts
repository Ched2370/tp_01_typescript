/*
La siguiente función contendrá parámetros obligatorios, 
opcionales y otros serán por defecto si no le pasamos ninguno. 
 Deberás adaptarlos de la siguiente forma:
 nombre → obligatorio
 edad → opcional
 puesto → por defecto u omisión será "operario"
*/

function mostrar(nombre: string, edad?: number, puesto: string = 'nada') {
  if (edad) {
    return `
    nombre: ${nombre},
    edad: ${edad},
    puesto: ${puesto}`;
  } else {
    return `
    nombre: ${nombre},
    puesto: ${puesto}`;
  }
}

console.log(mostrar('Mario', 38));
console.log(mostrar('Mario', NaN, 'desarrollador'));
