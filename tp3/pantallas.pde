void pantallas () {
  inicio ();
  textSize (18);
  if (pantalla == 1) {//pantalla 1
    image (fondos[1], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text (textos[1], 50, 420, 500, 170);
  }

  if (pantalla == 2) {//pregunta
    image (fondos[2], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("¿Tomar un atajo por un sendero desconocido?", 50, 420, 100, 170);
    text ("¿Ir por un sendero diferente pero conocido y desobedecer a la madre de Caperucita Roja?", 450, 420, 100, 170);
  }

  if (pantalla == 3) {//primeros caminos
    image (fondos[2], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("Ya tomaste el atajo, ¿Estas seguro de seguir?", 50, 420, 100, 90);
    text ("Si", 250, 420, 20, 20);
    text ("No,", 250, 520, 20, 20);
  }

  if (pantalla == 4) {//segundos caminos
    image (fondos[2], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("Ya tomaste el sendero, ¿Estas seguro de seguir?", 50, 420, 100, 90);
    text ("Si", 250, 420, 20, 20);
    text ("No", 250, 520, 20, 20);
  }

  if (pantalla == 5) {//primeros caminos (respuesta si) - con final
    image (fondos[3], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text (textos[2], 50, 420, 500, 170);
  }

  if (pantalla == 6) {//primeros caminos (respuesta no) - con final
    image (fondos[4], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text (textos[3], 50, 420, 500, 170);
  }

  if (pantalla == 7) {//segundos caminos (respuesta si) - con final
    image (fondos[5], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text (textos[4], 50, 420, 500, 170);
  }

  if (pantalla == 8) {//segundos caminos (respuesta no) - pantalla 1
    image (fondos[6], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text (textos[5], 50, 420, 500, 170);
  }

  if (pantalla == 9) {//segundos caminos (respuesta no) - pantalla 2
    image (fondos[7], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja presiente algo al entrar a la casa de su abuelita...", 200, 420, 150, 70);
    text ("¿Revisas la casa?", 200, 520, 150, 70);
  }

  if (pantalla == 10) {//segundos caminos (respuesta no) - pantalla 3
    image (fondos[7], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("Si, Caperucita Roja encuentra huellas de lobo por toda la casa.", 50, 420, 100, 170);
    text ("No, Caperucita Roja decide restarle importancia a su presentimiento.", 450, 420, 105, 170);
  }

  if (pantalla == 11) {//segundos caminos (revisar la casa de la abu (respuesta si))
    image (fondos[8], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text (textos[6], 50, 420, 500, 170);
  }

  if (pantalla == 12) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 1
    image (fondos[9], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text (textos[7], 30, 420, 520, 170);
  }

  if (pantalla == 13) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 2
    image (fondos[10], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text (textos [8], 50, 420, 500, 170);
    fill (0);
    rect (270, 560, 90, 30);
    fill (255);
    text ("Fin", 300, 565, 90, 30);
  }

  if (pantalla == 14) {//final
    image (fondos[11], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text (textos[9], 50, 420, 500, 170);
  }
}
