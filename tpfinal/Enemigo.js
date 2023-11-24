class Enemigo {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.img = loadImage ('juego/lobo.png');
    this.vel = random (2, 4);
  }

  dibujar() {
    if (this.x <= width + 50) {   
      image (this.img, this.x, this.y, 60, 80);
      this.x = this.x + this.vel;
    } else {
      this.x = -110;
    }
  }
  tocaPersonaje(personaje) {
    if (dist (this.x, this.y, personaje.x, personaje.y) < 15) {
      personaje.vida = false;
    }
  }
}
