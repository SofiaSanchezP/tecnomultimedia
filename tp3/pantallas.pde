void pantallas () {
  inicio ();
  textSize (18);
  if (pantalla == 1) {//pantalla 1
    image (fondos[1], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text ("Había una vez una niña llamada Caperucita Roja, así llamada por la capa de color rojo que siempre llevaba puesta. Un día, su madre le pidió que llevara una cesta de comida a su abuelita, que vivía al otro lado del bosque. Caperucita Roja tomó la cesta y se dirigió al bosque. Su madre le advirtió que no se detuviera en el camino, ya que había peligros acechando.", 50, 420, 500, 170);
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
    text ("Caperucita Roja, en lugar de seguir el camino principal, decide tomar un atajo por un sendero desconocido en el bosque. Mientras se aventura, se encuentra con un zorro astuto que le ofrece ayuda para llegar a casa de su abuelita. Confiada en la apariencia amistosa del zorro, Caperucita Roja acepta su ayuda y juntos llegan a la casa de la abuelita. Resulta que el zorro era un amigo cercano de la familia y solo quería asegurarse de que Caperucita Roja llegara a salvo. Todos celebran un alegre encuentro y disfrutan de un delicioso banquete.", 50, 420, 500, 170);
  }

  if (pantalla == 6) {//primeros caminos (respuesta no) - con final
    image (fondos[4], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja, mientras camina hacia la casa de su abuelita, se encuentra con un cazador amigable que le advierte sobre el lobo que acecha en el bosque. Juntos, deciden idear un plan para atrapar al lobo y proteger a la abuelita. Caperucita Roja y el cazador construyen una trampa ingeniosa y, cuando el lobo aparece en la casa de la abuelita, cae en la trampa y queda atrapado. La abuelita, Caperucita Roja y el cazador celebran su victoria, y el lobo aprende una lección sobre el respeto y la amistad.", 50, 420, 500, 170);
  }

  if (pantalla == 7) {//segundos caminos (respuesta si) - con final
    image (fondos[5], 0, 0);
    fill (0);
    rect (520, 560, 90, 30);
    fill (255);
    text ("Reiniciar", 528, 565, 62, 25);
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja, desobedeciendo las advertencias de su madre, decide explorar un sendero diferente en el bosque. Mientras camina, se encuentra con un grupo de simpáticos duendes que la invitan a jugar. Caperucita Roja acepta la invitación y pasa un día maravilloso con ellos, disfrutando de juegos y risas. Al atardecer, los duendes la escoltaron de regreso a casa y Caperucita Roja aprende la importancia de seguir las reglas y de hacer nuevas amistades.", 50, 420, 500, 170);
  }

  if (pantalla == 8) {//segundos caminos (respuesta no) - pantalla 1
    image (fondos[6], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja, siendo una niña curiosa, se distrajo con las flores y los animalitos del bosque. Mientras tanto, un lobo hambriento había visto a Caperucita Roja y decidió seguirla para aprovechar la oportunidad y comerse a su abuelita y a ella. El lobo, más astuto que la niña, corrió hacia la casa de la abuelita y llegó antes que Caperucita. Cuando Caperucita Roja finalmente llegó a la casa de su abuelita, tocó a la puerta. El lobo, disfrazado con la ropa de la abuelita, le pidió que entrara.", 50, 420, 500, 170);
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
    text ("Caperucita Roja se da cuenta del lobo a tiempo y logra escapar de la casa de su abuelita. Corre hacia el cazador que pasaba por el bosque y le cuenta lo que ha sucedido. Juntos, regresan a la casa de la abuelita y encuentran al lobo atrapado en una red que el cazador había tendido. El lobo es llevado lejos del bosque y Caperucita Roja y su abuelita viven felices y seguras.", 50, 420, 500, 170);
  }

  if (pantalla == 12) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 1
    image (fondos[9], 0, 0);
    image (flecha, 546, 560, 50, 30);
    image (flecha2, 4, 560, 50, 30);
    text ("Caperucita Roja notó que su abuelita parecía diferente, con unas grandes orejas y una nariz muy peluda. Un poco confundida, le preguntó: 'Abuelita, ¿por qué tienes los ojos tan grandes?'. El lobo respondió: 'Es para verte mejor, querida'. Caperucita Roja, aún sin sospechar nada, continuó preguntando por las orejas, la boca y los dientes del lobo, y este le daba respuestas similares. Finalmente, Caperucita Roja se dio cuenta de que algo no estaba bien. En ese momento, el lobo saltó de la cama y trató de atraparla, pero Caperucita Roja, asustada pero valiente, corrió y gritó pidiendo ayuda.", 30, 420, 520, 170);
  }

  if (pantalla == 13) {//segundos caminos (revisar la casa de la abu (respuesta no)) - pantalla 2
    image (fondos[10], 0, 0);
    image (flecha2, 4, 560, 50, 30);
    text ("Un cazador que pasaba por allí escuchó los gritos y corrió hacia la casa. Al entrar, vio al lobo intentando atrapar a Caperucita Roja y rápidamente sacó su cuchillo. El cazador luchó contra el lobo y logró salvar a la niña y a su abuelita.Desde ese día, Caperucita Roja aprendió la importancia de obedecer a sus padres y no hablar con extraños en el camino. Agradecida por el valiente cazador, ella y su abuelita le dieron las gracias y prometieron ser más cuidadosas en el futuro.", 50, 420, 500, 170);
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
    text ("Y así termina la historia de Caperucita Roja según la versión de Charles Perrault, una historia que nos enseña importantes lecciones sobre la obediencia y la precaución al interactuar con extraños.", 50, 420, 500, 170);
  }
}
