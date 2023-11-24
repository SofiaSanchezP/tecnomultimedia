class Obstaculos {

  constructor() {
    this.x = 90;
    this.y = 70;
    this.img = loadImage ('juego/arbol.png');
  }

  dibujarLinea1(i) {
    image (this.img, i*60, 0, this.x, this.y);
  }

  dibujarLinea2(i) {
    image (this.img, i*60, height/2.2, this.x, this.y);
  }

  dibujarLinea3(i) {
    image (this.img, i*60, height/5.2, this.x, this.y);
  }


  tocaPersonaje (personaje) {
    for (let i = 0; i < 4; i++) {
      if (dist (i*60, 0, personaje.x, personaje.y) < 15) {
        personaje.sePuedeMover = false;
      }
    }
    for (let i = 5; i < 10; i++) {
      if (dist (i*60, 0, personaje.x, personaje.y) < 15) {
        personaje.sePuedeMover = false;
      }
    }

    for (let i = 0; i < 6; i++) {
      if (dist (i*60, height/2.2, personaje.x, personaje.y) < 15) {
        personaje.sePuedeMover = false;
      }
    }

    for (let i = 5; i < 10; i++) {
      if (dist (i*60, height/5.2, personaje.x, personaje.y) < 15) {
        personaje.sePuedeMover = false;
      }
    }
  }
}
