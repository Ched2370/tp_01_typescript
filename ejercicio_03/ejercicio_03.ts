/*
Crear la clase Figura, A partir del ejercicio anterior "1-Rectángulo.ts" 
deberá sacar 2 clases con dos propiedades: base y altura (similar al ejercicio anterior)
Crear 2 clases hijas, “Rectángulo” y un “Triangulo” también con dos propiedades: 
base y altura ambas clases tendrán el método “calcularArea”.
La clase “Rectangulo” además contendrá el método “calcularPerimetro”
*/

class Figura {
  protected base: number;
  protected altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
}

class Rectangulo extends Figura {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  public calcularArea(): number {
    return this.base * this.altura;
  }
  public calcularPerimetro() {
    return (this.base + this.altura) * 2;
  }
}

class Triangulo extends Figura {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  public calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

let rectangulo = new Rectangulo(4, 6);
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());

let triangulo = new Triangulo(5, 10);
console.log(triangulo.calcularArea());
