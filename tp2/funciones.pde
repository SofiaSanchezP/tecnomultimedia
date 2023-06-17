void cuadricula () {
  for (int k=0; k<cant; k++) {
    fill (0);
    rect(0, tamY*k, tamX, tamY);
    primero(k);
    if (k%2 == 0) {
      for (int i = 0; i<cant; i++) {
        relleno (i, k);
        rect(i*tamX + 20, tamY*k, tamX, tamY);
        dibujarLineas (i);
      }
    } else { 
      for (int i = 0; i<cant; i++) {
       relleno (i, k);
       rect(i*tamX, tamY*k, tamX, tamY);
        dibujarLineas (i);
      }
    }
  }
}

void relleno (int i, int j) {

  if (i%2 == 0) {
    if (j%2 == 0) {
      fill (255);
    } else {
      fill (0);
    }
  }
  if (i%2 != 0) {
    if (j%2 != 0) {
      fill (255);
    } else {
      fill (0);
    }
  }
}


void primero (int i) {
  if (i%2 == 0) {
    fill (255);
  } else {
    fill (0);
  }
  if (i%2 != 0) {
    fill (255);
  } else {
    fill (0);
  }
}


void dibujarLineas (int i) {
  stroke (90, 88, 88);
  strokeWeight (linea);
  line (0, tamY*i, width, tamY*i);
}


void keyPressed () { 
  float grosor = random (1.5, 4.5);
  if (key == 'a' || key == 'A') {
    linea = grosor;
  }
  if (key == 'r' || key == 'R'){
    linea = 1;
  }
}
