void mouseClicked () {
  if (pantalla == 0) { // inicio
    if (mouseX > 250 && mouseY > 500 && mouseX < 350 && mouseY < 550) {
      pantalla = 1;
    } 

    //creditos
    if (mouseX > 242 && mouseY > 400 && mouseX < 355 && mouseY < 450) {
      pantalla = 15;
    }
  }

  if (pantalla > 0 && pantalla <= 4) { 
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla--;
    }
  }

  if (pantalla == 1) {  //primer fondo
    if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
      pantalla++;
    }
  }

  if (pantalla == 2) { //segundo fondo
    if (mouseX > 50 && mouseY > 420 && mouseX < 150 && mouseY < 590) {
      pantalla = 3;
    }
    if (mouseX > 450 && mouseY > 420 && mouseX < 550 && mouseY < 590) {
      pantalla = 4;
    }
  }

  if (pantalla == 3) { //segundo fondo
    if (mouseX > 250 && mouseY > 420 && mouseX < 270 && mouseY < 440) {
      pantalla = 5;
    }
    if (mouseX > 250 && mouseY > 520 && mouseX < 370 && mouseY < 540) {
      pantalla = 6;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 2;
    }
  }

  if (pantalla == 4) { //segundo fondo
    if (mouseX > 250 && mouseY > 420 && mouseX < 270 && mouseY < 440) {
      pantalla = 7;
    }
    if (mouseX > 250 && mouseY > 520 && mouseX < 370 && mouseY < 540) {
      pantalla = 8;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 2;
    }
  }

  if (pantalla == 5) { //tercer fondo
    if (botonSi(528, 565) == true) {
      pantalla = 0;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 3;
    }
  }

  if (pantalla == 6) { //cuarto fondo
    if (botonSi(528, 565) == true) {
      pantalla = 0;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 3;
    }
  }

  if (pantalla == 7) { //quinto fondo
    if (botonSi(528, 565) == true) {
      pantalla = 0;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 4;
    }
  }

  if (pantalla == 8) { //sexto fondo
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 4;
    }
    if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
      pantalla = 9;
    }
  }

  if (pantalla == 9) { //sexto fondo
    if (mouseX > 200 && mouseY > 520 && mouseX < 350 && mouseY < 590) {
      pantalla = 10;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 8;
    }
  }

  if (pantalla == 10) { //sexto fondo
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 9;
    }
    if (mouseX > 50 && mouseY > 420 && mouseX < 150 && mouseY < 590) {
      pantalla = 11;
    }
    if (mouseX > 450 && mouseY > 420 && mouseX < 555 && mouseY < 590) {
      pantalla = 12;
    }
  }

  if (pantalla == 11) { //octavo fondo
    if (botonSi(528, 565) == true) {
      pantalla = 0;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 10;
    }
  }

  if (pantalla == 12) { //noveno fondo
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 10;
    }
    if (mouseX > 546 && mouseY > 560 && mouseX < 596 && mouseY < 590) {
      pantalla = 13;
    }
  }

  if (pantalla == 13) { //decimo fondo
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 12;
    }
    if (mouseX > 270 && mouseY > 560 && mouseX < 360 && mouseY < 590) {
      pantalla = 14;
    }
  }

  if (pantalla == 14) { //fin definitivo
    if (botonSi(528, 565) == true) {
      pantalla = 0;
    }
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 13;
    }
  }

  if (pantalla == 15) { //creditos
    if (mouseX > 4 && mouseY > 560 && mouseX < 54 && mouseY < 590) {
      pantalla = 0;
    }
  }
}
