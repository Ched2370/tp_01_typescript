/*
Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
    return (a + b) * 2
}
*/

let result: (a: number, b: number) => number = (a, b) => (a + b) * 2;

console.log(result(2, 4));
