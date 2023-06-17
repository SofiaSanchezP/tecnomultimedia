// 
// Sanchez Ponce Sofia, 91368/3

int cant = 20;
int tamX, tamY;
float linea;
PImage img;

void setup() {
  size(800, 400);
  tamX = width/cant;
  tamY = tamX;
  linea = 1;
  img = loadImage ("ejemplo.jpg");
}

void draw() {
  background (0);
  image (img, 5, 5, width/2 - 10, height/2 - 10);
  textSize (15);
  text ("GUIA: Presionar a o A para realizar efecto. Presionar r o R para reiniciar.", 5, 250, width/2 - 10, height/2 - 10);
  translate (width/2, 0);
  cuadricula ();
}
