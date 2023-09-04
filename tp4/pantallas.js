function pantallas () {
  //juego
  if (conteo == 1) {
    background (0);
    Cuadricula ();
    autos ();
    flechaBack ();
    timer ();
    minimo = 1;
    if (posY2 == 1) {
      conteo = 5;
    }
    dir[1] = 2;
    dir[2] = 3;
    dir[3] = 1;
  } else {

    //creditos
    if (conteo == 2) {
      background (92, 155, 56);
      creditos ();
      flechaBack ();
    } else {

      //incio
      if (conteo == 3) {
        botonesInicio ();
        textosInicio ();
        minimo = 1;
      } else {

        //perdiste
        if (conteo == 4) {
          perdiste ();
        } else {

          //nivel 2
          if (conteo == 5) {
            background (52, 152, 79);
            sigNivelTexto ();
            flechaBack ();
            flechaSig ();
          } else {

            //ganaste
            if (conteo == 6) {
              ganaste ();
              flechaBack ();
            } else {

              //juego nivel 2
              if (conteo == 7) {
                background (0);
                Cuadricula2 ();
                autos ();
                flechaBack ();
                timer ();
                minimo = 1;
                if (posY2 == 1) {
                  conteo = 6;
                }
                dir[3] = 2;
                dir[1] = 1;
                if (posY2 == 5 && esPuente == false) {
                  conteo = 4;
                }
              } else {

                //nivel 1
                if (conteo == 8) {
                  background (52, 152, 79);
                  explicacionTexto ();
                  push ();
                  imageMode(CENTER);
                  image (teclas, width/2, height/2+80, width/2, height/2-20);
                  pop ();
                  flechaSig ();
                }
              }
            }
          }
        }
      }
    }
  }
}

function perdiste () {
  fill (201, 51, 51);
  conteo = 4;
  background (0);
  perdisteTexto ();
  image (triste, width/2-50, height/2, 100, 100);
  flechaBack ();
}

function ganaste () {
  if (minimo < maximo) {
    image (images[minimo], 0, 0);
    minimo++;
  }
  if (minimo == maximo) {
    background (0);
    ganasteTexto ();
    image (feliz, width/2-50, height/2, 100, 100);
  }
}
