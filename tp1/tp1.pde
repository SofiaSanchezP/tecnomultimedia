//Sofia Sanchez Ponce - 91368/3
//Comision 3

int cont;

PImage img1;
PImage img2;
PImage img3;

PFont fuente;

int posY;

void setup () {
  size (640, 480);

  img1 = loadImage ("img1.jpg");
  img2 = loadImage ("img2.jpg");
  img3 = loadImage ("img3.jpg");

  fuente = loadFont ("Monospaced.bold-48.vlw");
  posY = 500;
}

void draw () {
  textFont (fuente);

  if (cont == 0) {
    background (0);
    fill (255);
    text ("NATURALEZA DIGITAL", 60, 160);

    textSize (20);
    text ("Jennifer Steinkamp", 220, 200);

    rect (260, 300, 120, 30);
    textSize (15);
    fill (0);
    text ("Iniciar", 290, 310, 100, 20);
  }

  if (cont >= 1 && cont < 500) {
    image (img1, 0, 0, width, height);
    textSize (13);
    fill (255);
    text ("Jennifer Steinkamp (Denver, EEUU, 1958) reconocida internacionalmente \n por sus trabajos realizados en vídeo y con nuevas \n tecnologías, es un ejemplo claro de esta tendencia. \n Artista pionera en el uso de la animación digital, \n su trabajo se centra desde hace tres décadas en explorar \n temas vinculados con la percepción, el movimiento y el espacio. \n Su obra, que presenta en forma de vídeo instalaciones, \n busca transformar la arquitectura de los lugares donde se expone \n proyectando sobre muros, techos o ventanas imágenes \n tridimensionales creadas por ordenador, cuyo objetivo es alterar \n la percepción del espectador y generar \n espacios cargados de significados.", 20, posY--);
    cont = cont + 1;
  }
  if (cont == 500) {
    posY = 500;
  }
  if (cont >= 500 && cont < 800) {
    image (img2, 0, 0, width, height);
    textSize (13);
    fill (255);
    text ("Podría resumirse todo su trabajo como una \n experiencia visual donde trata de entender la naturaleza. \n Jennifer Steinkamp toma elementos especialmente del mundo vegetal: \n árboles, tallos y flores que si bien encarnan \n símbolos evocadores de un mundo arcádico con el que conectamos \n de forma casi visceral, no dejan de generarnos una \n sensación de extrañeza provocada por su estética claramente digital. \n Propuestas todas ellas creadas digitalmente para explorar, \n en definitiva, nuestra propia naturaleza.", 20, posY--);
    cont = cont + 1;
  }
  if (cont == 800) {
    posY = 500;
  }
  if (cont >= 800 && cont < 1100) {
    image (img3, 0, 0, width, height);
    textSize (13);
    fill (255);
    text ("Desmaterialización de la arquitectura. \n Juega con el espacio. Los muros desaparecen y se cubren de vida. \n Llena sus piezas de motivos que fluyen provocando efectos de extrañeza; \n una alteración de los sentidos, imágenes ondulantes que evocan \n las formas de la naturaleza en movimiento y que alteran \n la percepción sólida y estable de la arquitectura \n cuando el espectador cruza la sala.", 20, posY--);
    cont = cont + 1;
  }
  if (cont == 1100) {
    background (0);
    fill (255);
    rect (260, 300, 120, 30);
    textSize (15);
    fill (0);
    text ("Reiniciar", 290, 310, 100, 20);
  }
  println (cont);
}

void mousePressed () {
  if (cont == 0  && mouseX > 260 && mouseX < 380 && mouseY > 300 && mouseY < 330) {
    cont = 1;
  }
  if (cont == 1100  && mouseX > 260 && mouseX < 380 && mouseY > 300 && mouseY < 330) {
    cont = 0;
    posY = 0;
  }
}
