/*
5- Convertir las siguientes funciones a funciones flecha
function obtenerDoble( a, b ){
  return (a + b) * 2
}
function obtenerTriple( a, b, c ){
  return (a + b +c) * 3
}
*/
var obtDoble = function (a, b) { return a * b; };
console.log(obtDoble(5, 10));
var obtTriple = function (a, b, c) {
    return a + b + c;
};
console.log(obtTriple(2, 4, 6));
