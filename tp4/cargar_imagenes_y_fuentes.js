function cargarImagenes () {
  flecha = loadImage ("assets/flecha.png");
  flecha2 = loadImage ("assets/flecha2.png");
  sig = loadImage ("assets/sig.png");
  sig2 = loadImage ("assets/sig2.png");
  triste = loadImage ("assets/triste.png");
  feliz = loadImage ("assets/feliz.png");
  teclas = loadImage ("assets/teclas.png");

  for (let i=1; i < maximo; i++) {
    images [i] = loadImage ("assets/win"+ i + ".png");
  }
  for (let i=1; i < cant; i++) {
    auto [i] = loadImage ("assets/auto"+ i + ".png");
    rana[i] = loadImage ("assets/rana" + i + ".png");
    posX [i] = -110;
  }
  personaje = loadImage ("assets/personaje.png");
}

function cargarFuentes () {
  texto = loadFont ('assets/texto.TTF');
  titulo = loadFont ('assets/fuente.ttf');
}
