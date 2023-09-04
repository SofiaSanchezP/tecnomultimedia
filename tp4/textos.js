function textosInicio () {
  //titulo

  textFont (titulo, 60);
  fill (255);
  push ();
  textAlign (CENTER);
  text ("Frogger", width/2, 100);
  textSize (20);
  text ("(Clickea una rana para continuar)", width/2, 130);
  pop ();

  textSize (20);
  textFont (texto);
  text ("Iniciar", 135, 207);
  text ("Creditos", 135, 307);
}


function creditos () {
  fill (255);
  textFont (texto);
  textSize (25);
  text ("Por", width/2-180, height/2-160);
  text ("Sofia Sanchez", width/2-180, height/2-120);
  textSize (15);
  text ("91368/3", width/2-180, height/2-95);
}

function perdisteTexto () {
  push();
  if (conteo == 4) {
    fill (255, 0, 0);
    textSize (30);
    textAlign (CENTER);
    text ("PERDISTE", width/2, height/2);
  }
  pop ();
}

function ganasteTexto () {
  push ();
  fill (92, 155, 56);
  textSize (30);
  textAlign (CENTER);
  text ("GANASTE", width/2, height/2);
  pop ();
}

function sigNivelTexto () {
  push ();
  fill (255);
  textSize (30);
  textAlign (CENTER);
  text ("NIVEL 2", width/2, height/2);
  textSize (15);
  text ("Pasa por el puente!", width/2, height/2+50);
  text ("Y evita el agua!", width/2, height/2+70);
  pop ();
}

function explicacionTexto () {
  push ();
  fill (255);
  textSize (18);
  textAlign (CENTER);
  text ("Cruza sin que te choquen!", width/2, height/2-90);
  textSize (25);
  text ("Cuidado!", width/2, height/2-30);
  textSize (15);
  text ("Solo tenes 15 segundos.", width/2, height/2);
  pop ();
}
