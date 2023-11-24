class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos + 1;
    this.crearPersonaje();
    this.crearEnemigos();
    this.pasto = loadImage("juego/pasto.png");
    this.casa = loadImage ("juego/casa.png");
    this.pantalla = 1;
    this.obstaculos = new Obstaculos();
    this.finJuego = false;
    this.teclas = loadImage ("juego/teclas.png");
    this.enCasa = false;
    
    this.texto1 = "Presiona R para reiniciar el juego";
    this.texto2 = "Presiona I para volver al inicio de la historia";
  }

  dibujar() {
    if (this.pantalla == 1) {
      this.inicio();
    } else if (this.pantalla == 2) {
      push ();
      background (177, 203, 169);
      image (this.pasto, 0, 560, width, 60);
      noStroke();
      fill (137, 170, 127);
      rect (0, 0, width, height/9.2);

      image (this.casa, width/2.5, 0, 90, 70);
      this.dibujarObstaculos();
      this.personaje.dibujar();
      for (let i=1; i < this.cantidadEnemigos; i++) {
        this.enemigos [i].dibujar();
      }
      this.llegaCasa();
      console.log (mouseX, mouseY);
      pop ();
      this.colision ();
    } else if (this.pantalla == 3) {
      this.perdiste1();
    } else if (this.pantalla == 4) {
      this.ganaste();
    } else if (this.pantalla == 5) {
      this.perdiste2();
    }

    if (this.personaje.vida == false) {
      this.pantalla = 3;
    }

    if (this.enCasa == true) {
      this.pantalla = 4;
    }

    if (this.personaje.sePuedeMover == false) {
      this.pantalla = 5;
    }
  }

  inicio () {
    background (177, 10, 10);
    push ();
    fill (255);
    text ("Cruza el bosque por el nuevo camino. Evita la manada de lobos y no cruces por los arboles.", 130, 200, 300, 300, 30);
    fill (0);
    fill (255);
    text ("Usa las siguientes teclas:", 130, 300, 300, 300, 30);
    text ("Presiona P para iniciar", 276, 538);
    imageMode(CENTER);
    image (this.teclas, 290, 400, 250, 200);
    pop ();
  }

  ganaste () {
    background (177, 10, 10);
    text ("Caperucita llegó sana y salva a la casa de su abuelita.  Su abuela al enterarse de la gran aventura que tuvo por el nuevo camino, le comenta horrorizada que allí viven muchos lobos y podria haber muerto deborada.", 130, 200, 300, 300, 30);
    text (this.texto1, 40, 425);
    text (this.texto2, 260, 480);
  }

  perdiste1 () {
    background (0);
    push ();
    fill (255);
    text ("Caperucita no pudo llegar a la casa de su abuela. Tiempo despues se enteran que fue deborada por la manada de lobos que allí vivia...", 130, 200, 300, 300, 30);
    text (this.texto1, 40, 425);
    text (this.texto2, 260, 480);
    pop ();
  }

  perdiste2 () {
    background (0);
    push ();
    fill (255);
    text ("Caperucita no pudo llegar a la casa de su abuela. Tiempo despues encuentran su cuerpo en medio del bosque, lejos del sendero.", 130, 200, 300, 300, 30);
    text (this.texto1, 40, 425);
    text (this.texto2, 260, 480);
    pop ();
  }

  dibujarObstaculos() {
    for (let i = 0; i < 4; i++) {
      this.obstaculos.dibujarLinea1(i);
    }
    for (let i = 5; i < 10; i++) {
      this.obstaculos.dibujarLinea1(i);
    }

    for (let i = 0; i < 6; i++) {
      this.obstaculos.dibujarLinea2(i);
    }

    for (let i = 5; i < 10; i++) {
      this.obstaculos.dibujarLinea3(i);
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i=1; i < this.cantidadEnemigos; i++) {
      this.enemigos [i] = new Enemigo(20, i*142);//ubicación del enemigo
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2.5, height/1.2);//ubicación del personaje
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
    if (this.pantalla == 1 ) {
      if (key == 'p' || key == 'P') {
        this.pantalla = 2;
      }
    }

    if (this.pantalla == 3 || this.pantalla == 4 || this.pantalla == 5) { //reiniciar juego
      if (key == "r" || key == "R") {
        this.reiniciarJuego ();
      }

      if (key == "i" || key == "I") {
        this.finJuego = true;
        this.reiniciarJuego ();
      }
    }
  }

  reiniciarJuego () {
    this.pantalla = 1;
    this.personaje.vida = true;
    this.personaje.x = width/2.5;
    this.personaje.y = height/1.2;
    for (let i=1; i < this.cantidadEnemigos; i++) {
      this.enemigos [i] = new Enemigo(20, i*142);
    }
    this.personaje.sePuedeMover = true;
    this.enCasa = false;
  }

  colision () {
    for (let i=1; i < this.cantidadEnemigos; i++) {
      this.enemigos [i].tocaPersonaje(this.personaje);
    }
    this.obstaculos.tocaPersonaje(this.personaje);
  }


  llegaCasa() {
    if (this.personaje.x > 240 && this.personaje.x < 320 && this.personaje.y > 0 && this.personaje.y < 70) {
      this.enCasa = true;
    }
  }
}
