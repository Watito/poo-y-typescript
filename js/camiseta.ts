//Clase(molde del objeto )
class Camiseta {
  //Propiedades(Caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //Metodos (funciones o acciones del objeto)
  constructor(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }

  public setColor(color) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
}

var camiseta = new Camiseta("Rojo","Manga Larga","Nike","L",14);

camiseta.setColor("Rojo");

// var playera = new Camiseta();
// playera.setColor("Azul");

console.log(camiseta);
