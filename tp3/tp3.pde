int pantalla = 0; //cambio de pantalla
PImage [] fondos = new PImage [13]; //fondos de las pantallas
PFont fuente; //tipografia
PImage flecha;
PImage flecha2;


void setup () {
  size (600, 600);
  fuente = createFont ("fabula.otf", 32);
  for (int i=1; i <= 12; i++) {
    fondos [i] = loadImage ("fondo ("+ i + ").png");
  }
  flecha = loadImage ("flecha.png");
  flecha2 = loadImage ("flecha2.png");
}

void draw () {
  textFont (fuente);
  background (189, 55, 59);
  pantallas ();
  println (pantalla);
}
