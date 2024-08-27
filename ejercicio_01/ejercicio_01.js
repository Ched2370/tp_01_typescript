/*Crear una clase Empleado, con las siguientes propiedades
 * nombre,
 * apellido,
 * edad (dato numérico),
 * activo (dato del tipo true/false),
 * roles (es un array con los roles que puede desempañar el empleado),
 * dato que contiene información extra, puede ser la cantidad de hijos(un número) o el título (una cadena).
 * Deberá  un constructor (que inicialice los atributos y los muestre por consola).
Instanciar un objeto y luego compilar el typescript a js. */
var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellido, edad, activo, roles, dato) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.activo = activo;
        this.roles = roles;
        this.dato = dato;
    }
    Empleado.prototype.mostrar = function () {
        return "\n    nombre: ".concat(this.nombre, ",\n    apellido: ").concat(this.apellido, ",\n    edad: ").concat(this.edad, ",\n    activo: ").concat(this.activo, ",\n    roles: ").concat(this.roles, ",\n    dato: ").concat(this.dato);
    };
    return Empleado;
}());
var empl = new Empleado('Mario', 'Ibz', 38, true, ['vago', 'viejo'], 3);
console.log(empl.mostrar());
