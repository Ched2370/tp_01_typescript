/*
Crear la clase Rectángulo con dos propiedades: base y altura, 
un método “área” (que devolverá el área del rectángulo)  */

class Rectangulo {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  public area(): string {
    return 'area: ' + this.base * this.altura;
  }
}

let rect = new Rectangulo(2, 5);

console.log(rect.area());
