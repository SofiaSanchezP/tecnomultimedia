class Cuento {
  constructor() {
    this.pantalla = 0; //cambio de pantalla
    this.fondos = [13]; //fondos de las pantallas
    this.textos = [10];
    for (let i=1; i <= 12; i++) {
      this.fondos [i] = loadImage ("cuento/fondo"+ i + ".png");
    }

    this.textos[1] = "Había una vez una niña llamada Caperucita Roja, así llamada por la capa de color rojo que siempre llevaba puesta. Un día, su madre le pidió que llevara una cesta de comida a su abuelita, que vivía al otro lado del bosque. Caperucita Roja tomó la cesta y se dirigió al bosque. Su madre le advirtió que no se detuviera en el camino, ya que había peligros acechando.";
    this.textos[2] = "Caperucita Roja, en lugar de seguir el camino principal, decide tomar un atajo por un sendero desconocido en el bosque. Allí encontró varias señales de advertencia sobre posibles lobos.";
    this.textos[3] = "Caperucita Roja, mientras camina hacia la casa de su abuelita, se encuentra con un cazador amigable que le advierte sobre el lobo que acecha en el bosque. Juntos, deciden idear un plan para atrapar al lobo y proteger a la abuelita. Caperucita Roja y el cazador construyen una trampa ingeniosa y, cuando el lobo aparece en la casa de la abuelita, cae en la trampa y queda atrapado. La abuelita, Caperucita Roja y el cazador celebran su victoria, y el lobo aprende una lección sobre el respeto y la amistad.";
    this.textos[4] = "Caperucita Roja, desobedeciendo las advertencias de su madre, decide explorar un sendero diferente en el bosque. Mientras camina, se encuentra con un grupo de simpáticos duendes que la invitan a jugar. Caperucita Roja acepta la invitación y pasa un día maravilloso con ellos, disfrutando de juegos y risas. Al atardecer, los duendes la escoltaron de regreso a casa y Caperucita Roja aprende la importancia de seguir las reglas y de hacer nuevas amistades.";
    this.textos[5] = "Caperucita Roja, siendo una niña curiosa, se distrajo con las flores y los animalitos del bosque. Mientras tanto, un lobo hambriento había visto a Caperucita Roja y decidió seguirla para aprovechar la oportunidad y comerse a su abuelita y a ella. El lobo, más astuto que la niña, corrió hacia la casa de la abuelita y llegó antes que Caperucita. Cuando Caperucita Roja finalmente llegó a la casa de su abuelita, tocó a la puerta. El lobo, disfrazado con la ropa de la abuelita, le pidió que entrara.";
    this.textos[6] = "Caperucita Roja se da cuenta del lobo a tiempo y logra escapar de la casa de su abuelita. Corre hacia el cazador que pasaba por el bosque y le cuenta lo que ha sucedido. Juntos, regresan a la casa de la abuelita y encuentran al lobo atrapado en una red que el cazador había tendido. El lobo es llevado lejos del bosque y Caperucita Roja y su abuelita viven felices y seguras.";
    this.textos[7] = "Caperucita Roja notó que su abuelita parecía diferente, con unas grandes orejas y una nariz muy peluda. Un poco confundida, le preguntó: 'Abuelita, ¿por qué tienes los ojos tan grandes?'. El lobo respondió: 'Es para verte mejor, querida'. Caperucita Roja, aún sin sospechar nada, continuó preguntando por las orejas, la boca y los dientes del lobo, y este le daba respuestas similares. Finalmente, Caperucita Roja se dio cuenta de que algo no estaba bien. En ese momento, el lobo saltó de la cama y trató de atraparla, pero Caperucita Roja, asustada pero valiente, corrió y gritó pidiendo ayuda.";
    this.textos[8] = "Un cazador que pasaba por allí escuchó los gritos y corrió hacia la casa. Al entrar, vio al lobo intentando atrapar a Caperucita Roja y rápidamente sacó su cuchillo. El cazador luchó contra el lobo y logró salvar a la niña y a su abuelita.Desde ese día, Caperucita Roja aprendió la importancia de obedecer a sus padres y no hablar con extraños en el camino. Agradecida por el valiente cazador, ella y su abuelita le dieron las gracias y prometieron ser más cuidadosas en el futuro.";
    this.textos[9] = "Y así termina la historia de Caperucita Roja según la versión de Charles Perrault, una historia que nos enseña importantes lecciones sobre la obediencia y la precaución al interactuar con extraños.";

    this.fuente = loadFont ("cuento/fabula.otf", 32); //tipografia
    this.flecha = loadImage ("cuento/flecha.png");
    this.flecha2 = loadImage ("cuento/flecha2.png");
    this.objuego = new Juego (3);

    this.finJuego = false;
  }

  dibujar () {
    textFont (this.fuente);
    textSize (18);
    background (189, 55, 59);

    if (this.pantalla == 0) { //inicio
      image (this.fondos[12], 0, 0);
      this.objuego.finJuego = false;
      fill (0);
      rect (250, 500, 100, 50);
      rect (242, 400, 115, 50);
      fill (255);
      text ("Iniciar", 276, 538);
      text ("Creditos", 260, 438);
    } else if (this.pantalla == 1) {//pantalla 1
      image (this.fondos[1], 0, 0);
      image (this.flecha, 546, 560, 50, 30);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[1], 50, 420, 500, 170);
    } else if (this.pantalla == 2) {//pregunta
      image (this.fondos[2], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text ("¿Tomar un atajo por un sendero desconocido?", 50, 420, 100, 170);
      text ("¿Ir por un sendero diferente pero conocido y desobedecer a la madre de Caperucita Roja?", 450, 420, 100, 170);
    } else if (this.pantalla == 3) {//primeros caminos
      image (this.fondos[2], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text ("Ya tomaste el atajo, ¿Estas seguro de seguir?", 50, 420, 100, 90);
      text ("Si", 250, 420, 20, 20);
      text ("No,", 250, 520, 20, 20);
    } else if (this.pantalla == 4) {//segundos caminos
      image (this.fondos[2], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text ("Ya tomaste el sendero, ¿Estas seguro de seguir?", 50, 420, 100, 90);
      text ("Si", 250, 420, 20, 20);
      text ("No", 250, 520, 20, 20);
    } else if (this.pantalla == 5) {//primeros caminos (respuesta si) - con final
      image (this.fondos[3], 0, 0);
      fill (0);
      rect (520, 560, 90, 30);
      fill (255);
      text ("Jugar", 528, 575, 62, 25);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[2], 50, 480, 500, 170);
    } else if (this.pantalla == 6) {//primeros caminos (respuesta no) - con final
      image (this.fondos[4], 0, 0);
      fill (0);
      rect (520, 560, 90, 30);
      fill (255);
      text ("Reiniciar", 528, 575, 62, 25);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[3], 50, 420, 500, 170);
    } else if (this.pantalla == 7) {//segundos caminos (respuesta si) - con final
      image (this.fondos[5], 0, 0);
      fill (0);
      rect (520, 560, 90, 30);
      fill (255);
      text ("Reiniciar", 528, 575, 62, 25);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[4], 50, 420, 500, 170);
    } else if (this.pantalla == 8) {//segundos caminos (respuesta no) - pantalla 1
      image (this.fondos[6], 0, 0);
      image (this.flecha, 546, 560, 50, 30);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[5], 50, 420, 500, 170);
    } else if (this.pantalla == 9) {//segundos caminos (respuesta no) - pantalla 2
      image (this.fondos[7], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text ("Caperucita Roja presiente algo al entrar a la casa de su abuelita...", 200, 420, 150, 70);
      text ("¿Revisas la casa?", 200, 530, 150, 70);
    } else if (this.pantalla == 10) {//segundos caminos (respuesta no) - pantalla 3
      image (this.fondos[7], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text ("Si, Caperucita Roja encuentra huellas de lobo por toda la casa.", 50, 420, 100, 170);
      text ("No, Caperucita Roja decide restarle importancia a su presentimiento.", 450, 420, 105, 170);
    } else if (this.pantalla == 11) {//segundos caminos (revisar la casa de la abu (respuesta si))
      image (this.fondos[8], 0, 0);
      fill (0);
      rect (520, 560, 90, 30);
      fill (255);
      text ("Reiniciar", 528, 575, 62, 25);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[6], 50, 420, 500, 170);
    } else if (this.pantalla == 12) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 1
      image (this.fondos[9], 0, 0);
      image (this.flecha, 546, 560, 50, 30);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[7], 30, 420, 520, 170);
    } else if (this.pantalla == 13) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 2
      image (this.fondos[10], 0, 0);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos [8], 50, 420, 500, 170);
      fill (0);
      rect (270, 560, 90, 30);
      fill (255);
      text ("Fin", 300, 575, 90, 30);
    } else if (this.pantalla == 14) {//final
      image (this.fondos[11], 0, 0);
      fill (0);
      rect (520, 560, 90, 30);
      fill (255);
      text ("Reiniciar", 528, 575, 62, 25);
      image (this.flecha2, 4, 560, 50, 30);
      text (this.textos[9], 50, 420, 500, 170);
    } else if (this.pantalla == 15) { //creditos
      image (this.flecha2, 4, 560, 50, 30);
      text ("Caperucita Roja de Charles Perrault", 80, 200);
      text ("Alumna:", 100, 400);
      text ("Sofia Sanchez Ponce", 100, 440);
      text ("91368/3", 100, 480);
    } else if (this.pantalla == 16) {
      this.objuego.dibujar();
      if (this.objuego.finJuego == true) {
        this.pantalla = 0;
      }
    }
  }

  teclas(keyCode) {
    this.objuego.teclaPresionada(keyCode);
  }

  botones(event) {
    if (this.pantalla == 0) { // inicio
      push ();
      if (mouseX > 250 && mouseY > 500 && mouseX < 350 && mouseY < 550) {
        this.pantalla = 1;
      }

      //creditos
      if (mouseX > 242 && mouseY > 400 && mouseX < 355 && mouseY < 450) {
        this.pantalla = 15;
      }
      pop ();
    }

    if (this.pantalla == 1) {  //primer fondo
      push();
      if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
        this.pantalla++;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = this.pantalla - 1;
      }
      pop();
    }

    if (this.pantalla == 2) { //segundo fondo
      push ();
      if (mouseX > 50 && mouseY > 420 && mouseX < 90 && mouseY < 490) {
        this.pantalla = 3;
      }
      if (mouseX > 450 && mouseY > 420 && mouseX < 550 && mouseY < 590) {
        this.pantalla = 4;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = this.pantalla - 1;
      }
      pop ();
    }

    if (this.pantalla == 3) { //segundo fondo
      push();
      if (mouseX > 220 && mouseY > 400 && mouseX < 270 && mouseY < 420) {
        this.pantalla = 5;
      }
      if (mouseX > 230 && mouseY > 500 && mouseX < 370 && mouseY < 520) {
        this.pantalla = 6;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 2;
      }
      pop ();
    }

    if (this.pantalla == 4) { //segundo fondo
      push ();
      if (mouseX > 220 && mouseY > 400 && mouseX < 270 && mouseY < 420) {
        this.pantalla = 7;
      }
      if (mouseX > 220 && mouseY > 500 && mouseX < 370 && mouseY < 520) {
        this.pantalla = 8;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 2;
      }
      pop ();
    }

    if (this.pantalla == 5) { //tercer fondo Y JUEGO
      push ();
      if (mouseX > 520 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
        this.pantalla=16; // ir al juego
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 3;
      }
      pop ();
    }

    if (this.pantalla == 6) { //cuarto fondo
      push ();
      if (mouseX > 528 && mouseY > 565 && mouseX < 528 + 62 && mouseY < 565 + 25) {
        this.pantalla = 0;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 3;
      }
      pop ();
    }

    if (this.pantalla == 7) { //quinto fondo
      push ();
      if (mouseX > 528 && mouseY > 565 && mouseX < 528 + 62 && mouseY < 565 + 25) {
        this.pantalla = 0;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 4;
      }
      pop ();
    }

    if (this.pantalla == 8) { //sexto fondo
      push ();
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 4;
      }
      if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
        this.pantalla = 9;
      }
      pop ();
    }

    if (this.pantalla == 9) { //sexto fondo
      push ();
      if (mouseX > 200 && mouseY > 520 && mouseX < 300 && mouseY < 550) {
        this.pantalla = 10;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 8;
      }
      pop ();
    }

    if (this.pantalla == 10) { //sexto fondo
      push ();
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 9;
      }
      if (mouseX > 50 && mouseY > 420 && mouseX < 150 && mouseY < 590) {
        this.pantalla = 11;
      }
      if (mouseX > 450 && mouseY > 420 && mouseX < 555 && mouseY < 590) {
        this.pantalla = 12;
      }
      pop ();
    }

    if (this.pantalla == 11) { //octavo fondo
      push ();
      if (mouseX > 528 && mouseY > 565 && mouseX < 528 + 62 && mouseY < 565 + 25) {
        this.pantalla = 0;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 10;
      }
      pop ();
    }

    if (this.pantalla == 12) { //noveno fondo
      push ();
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 10;
      }
      if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
        this.pantalla = 13;
      }
      pop ();
    }

    if (this.pantalla == 13) { //decimo fondo
      push ();
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 12;
      }
      if (mouseX > 270 && mouseY > 560 && mouseX < 360 && mouseY < 590) {
        this.pantalla = 14;
      }
      pop ();
    }

    if (this.pantalla == 14) { //fin definitivo
      push ();
      if (mouseX > 528 && mouseY > 565 && mouseX < 528 + 62 && mouseY < 565 + 25) {
        this.pantalla = 0;
      }
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 13;
      }
      pop ();
    }

    if (this.pantalla == 15) { //creditos
      push ();
      if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
        this.pantalla = 0;
      }
      pop ();
    }
  }
}
