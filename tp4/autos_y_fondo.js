
function autos () {
  fill (255);
  for (let f=1; f < cant; f++) {
    if (posX[f] <= width + 50) {
      image (auto[f], posX[f], posY[f], 100, 50);
      posX[f] = posX[f] + dir[f];
    } else {
      posX[f] = -110;
    }
  }
}

//nivel 1
function Cuadricula () {
  noStroke ();
  for (let i=0; i<cantidad; i++) {
    for (let j=0; j<cantidad; j++) {
      if (j==1 || j == 14) {
        fill (92, 155, 56);
      } else {
        noFill();
      }
      rectMode (CORNER);
      rect (i*tamX, j*tamY, tamX, tamY);
      if (posX2 == i && posY2 == j) {
        image (personaje, i*tamX, j*tamY, tamX, tamY);

        for (let g=1; g < cant; g++) {
          if (i*tamX > posX[g] && i*tamX + tamX < posX[g] + 100 && j*tamY > posY [g] && j*tamY + tamY <= posi[g]) {
            conteo = 4;
            posX2 = 8;
            posY2 = 15;
          }
        }
      }
    }
  }
}

//nivel 2
function Cuadricula2 () {
  noStroke ();

  for (let col=0; col<cantidad; col++) {
    for (let fil=0; fil<cantidad; fil++) {
      if (fil==1 || fil == 14) {
        fill (92, 155, 56);
      } else {
        noFill();
      }
      if (fil==5) {
        fill (51, 114, 167);
        rect (col*tamX, fil*tamY, tamX, tamY);
        if (fil==5 && col == 7) {
          fill (92, 155, 56);
          rect (col*tamX, fil*tamY, tamX, tamY);
          if (col == posX2 && fil == posY2) {
            esPuente = true;
          } else {
            esPuente = false;
          }
        }
      }
      rectMode (CORNER);
      rect (col*tamX, fil*tamY, tamX, tamY);
      if (posX2 == col && posY2 == fil) {
        image (personaje, col*tamX, fil*tamY, tamX, tamY);

        for (let g=1; g < cant; g++) {
          if (col*tamX > posX[g] && col*tamX + tamX < posX[g] + 100 && fil*tamY > posY [g] && fil*tamY + tamY <= posi[g]) {
            conteo = 4;
            posX2 = 8;
            posY2 = 15;
          }
        }
      }
    }
  }
}
