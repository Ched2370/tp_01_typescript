/*Crear una clase Empleado, con las siguientes propiedades 
 * nombre, 
 * apellido, 
 * edad (dato numérico), 
 * activo (dato del tipo true/false), 
 * roles (es un array con los roles que puede desempañar el empleado),  
 * dato que contiene información extra, puede ser la cantidad de hijos(un número) o el título (una cadena). 
 * Deberá  un constructor (que inicialice los atributos y los muestre por consola).
Instanciar un objeto y luego compilar el typescript a js. */

class Empleado {
  private nombre: string;
  private apellido: string;
  private edad: number;
  private activo: boolean;
  private roles: string[];
  private dato: string | number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    activo: boolean,
    roles: string[],
    dato: string | number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.activo = activo;
    this.roles = roles;
    this.dato = dato;
  }

  public mostrar(): string {
    return `
    nombre: ${this.nombre},
    apellido: ${this.apellido},
    edad: ${this.edad},
    activo: ${this.activo},
    roles: ${this.roles},
    dato: ${this.dato}`;
  }
}

let empl = new Empleado('Mario', 'Ibz', 38, true, ['vago', 'viejo'], 3);

console.log(empl.mostrar());
