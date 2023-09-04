function botonesInicio () {
  if (mouseX > 17 && mouseY > 267 && mouseX < 17 + 112 && mouseY < 267 + 60) {
    image(rana[2], 17, 267, 112, 60);
  } else {
    if (mouseX > width/2) {
      image(rana[3], 17, 267, 112, 60);
    } else {
      image(rana[1], 17, 267, 112, 60);
    }
  }

  if (mouseX > 17 && mouseY > 167 && mouseX < 17 + 112 && mouseY < 167 + 60) {
    image(rana[2], 17, 167, 112, 60);
  } else {
    if (mouseX > width/2) {
      image(rana[3], 17, 167, 112, 60);
    } else {
      image(rana[1], 17, 167, 112, 60);
    }
  }
}

function flechaBack () {
  textSize (13);
  fill (255);
  text ("Volver", 47, 330);
  if (mouseX > 17 && mouseY > 330 && mouseX < 17 + 90 && mouseY < 330 + 40) {
    image (flecha2, 17, 330, 90, 40);
  } else {
    image (flecha, 17, 330, 90, 40);
  }
}

function flechaSig () {
  textSize (13);
  fill (255);
  text ("Siguiente", 280, 330);
  if (mouseX > 300 && mouseY > 330 && mouseX < 300 + 90 && mouseY < 330 + 40) {
    image (sig2, 300, 330, 90, 40);
  } else {
    image (sig, 300, 330, 90, 40);
  }
}

function mouseClicked () {

  //boton 2
  if (conteo == 3) {
    if (mouseX > 17 && mouseY > 267 && mouseX < 17 + 112 && mouseY < 267 + 60) {
      conteo = 2;
    }

    //boton 1
    if (mouseX > 17 && mouseY > 167 && mouseX < 17 + 112 && mouseY < 167 + 60) {
      conteo = 8;
    }
  }

  //flechas para atras
  if (conteo == 2) {
    if (mouseX > 17 && mouseY > 330 && mouseX < 17 + 90 && mouseY < 330 + 40) {
      conteo = 3;
    }
  }
  if (conteo == 1 || conteo == 4 || conteo == 5 || conteo == 6) {
    if (mouseX > 17 && mouseY > 330 && mouseX < 17 + 90 && mouseY < 330 + 40) {
      conteo = 3;
      s = 0;
      m = 0;
      posX2 = 8;
      posY2 = 15;
      for (let i=1; i < cant; i++) {
        posX [i] = -110;
      }
    }
  }

  if (conteo == 5) {
    if (mouseX > 300 && mouseY > 330 && mouseX < 300 + 90 && mouseY < 330 + 40) {
      conteo = 7;
      s = 0;
      m = 0;
      posX2 = 8;
      posY2 = 15;
      for (let i=1; i < cant; i++) {
        posX [i] = -110;
      }
    }
  }
  if (conteo == 8) {
    if (mouseX > 300 && mouseY > 330 && mouseX < 300 + 90 && mouseY < 330 + 40) {
      conteo = 1;
    }
  }
}
