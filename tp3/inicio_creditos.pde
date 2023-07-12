void inicio () {
  if (pantalla == 0) { //inicio
    image (fondos[12], 0, 0);
    fill (0);
    rect (250, 500, 100, 50);
    rect (242, 400, 115, 50);
    fill (255);
    text ("Iniciar", 266, 538);
    text ("Creditos", 250, 438);
  }

  if (pantalla == 15) { //creditos
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja de Charles Perrault", 80, 200);
    text ("Alumna:", 100, 400);
    text ("Sofia Sanchez Ponce", 100, 440);
    text ("91368/3", 100, 480);
  }
}
