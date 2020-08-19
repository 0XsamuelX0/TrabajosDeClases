import "./styles.css";

document.getElementById("app").innerHTML = `
  <h1> venta de bicicletas </h1>
`;

class bicicleta {
  constructor(tipo, tamaño, colores) {
    this.tipo = tipo;
    this.tamaño = tamaño;
    this.colores = colores;
  }
  preparar() {
    console.log(
      `Preparando envio ${this.tamaño}, ${this.tipo}, colores: ${this.colores}`
    );
    return this;
  }

  ensamblaje() {
    console.log("La bicicleta se esta pintando");
    console.log("La bicicleta se esta en el area de ensamblaja");
    return this;
  }

  empacar() {
    console.log("Empacando la bicicleta");
    console.log("La bicicleta se está enviando");
    return this;
  }
}

class montaña extends bicicleta {
  constructor(tipo, tamaño, colores, rin, Horquilla, Neumáticos) {
    super(tipo, tamaño, colores);
    this.montaña = montaña;
    this.rin = rin;
    this.Horquilla = Horquilla;
    this.Neumáticos = Neumáticos;
  }

  elegirCombo() {
    this.preparar();
    this.ensamblaje();
    this.empacar();

    console.log(
      `Pedido: 
      \nTipo: ${this.tipo}
      \nTamaño: ${this.tamaño}
      \nColores: ${this.colores}, ${this.colores}, 
      \nRin: ${this.rin}
      \nHorquilla: ${this.Horquilla}
      \nNeumáticos: ${this.Neumáticos}`
    );
    return this;
  }
}

const montaña1 = new montaña(
  "Bicicleta De Montaña 29",
  "mediana",
  ["Negro", "Azul"],
  "29 pulgadas",
  "Acero ligero",
  "Disco mecánico",
  2
);
console.log(montaña1.elegirCombo());
