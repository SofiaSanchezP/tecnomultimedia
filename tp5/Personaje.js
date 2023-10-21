class Personaje {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.img = loadImage ('juego/cape.png');
    this.vida = true;
    this.sePuedeMover = true;
  }

  dibujar() {
    if (this.vida) {
      image (this.img, this.x, this.y, 50, 70);
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }


  moverIzquierda() {
    if (this.x > 0) {
      this.x -= 20;
    }
  }

  moverDerecha() {
    if (this.x < width - 50) {
      this.x += 20;
    }
  }

  moverArriba() {
    if (this.y > 0) {
      this.y -= 20;
    }
  }

  moverAbajo() {
    if (this.y < height - 80) {
      this.y += 20;
    }
  }
}
