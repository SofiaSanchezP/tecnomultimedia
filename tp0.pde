PImage img;

void setup () {
  size (800, 400);
  img = loadImage ("emeritus.jpg");
}

void draw () {
  background (0);
  image (img, width/2, 0, 400, 400);
  noStroke ();

  fill (72, 53, 25); //pelo
  ellipse (width/2/2, height/2 - 60, 380, 300);

  fill (255); //cara
  ellipse (width/2/2, height/2, 310, 350);

  fill (0); //sien
  rectMode (CENTER);
  rect (65, height/2 - 55, 40, 100);
  rect (width/2 - 65, height/2 - 55, 40, 100);

  fill (72, 53, 25); //pelo de las sien
  ellipse (width/2/2, 50, 230, 55);
  ellipse (55, height/2 - 80, 50, 138);
  ellipse (width/2 - 55, height/2 - 80, 50, 138);

  fill (0); //ojos
  ellipse (133, 180, 85, 60);
  ellipse (width/2 - 133, 180, 85, 60);
  fill (229, 229, 229);
  ellipse (145, 179, 45, 20);
  ellipse (width/2 - 145, 179, 45, 20);
  fill (47, 54, 45);
  ellipse (145, 179, 25, 20);
  fill (255);
  ellipse (width/2 - 145, 179, 25, 20);
  fill (0);
  ellipse (145, 179, 10, 10);
  ellipse (width/2 - 145, 179, 10, 10);

  fill (118, 22, 22); //boca - fondo
  ellipse (width/2/2, height - 105, 90, 23);

  fill (0); //labios
  ellipse (width/2/2, height - 120, 90, 23);
  ellipse (width/2/2, height - 92, 90, 23);
  ellipse (163, 294, 20, 40);
  ellipse (width/2 - 163, 294, 20, 40);

  //mejillas
  ellipse (width/2 - 161, 296, 20, 25);
  ellipse (width/2 - 159, 298, 20, 25);
  ellipse (width/2 - 157, 300, 20, 25);
  ellipse (width/2 - 155, 302, 20, 25);
  ellipse (width/2 - 143, 296, 20, 50);
  ellipse (width/2 - 140, 294, 20, 50);
  ellipse (width/2 - 138, 292, 20, 50);
  ellipse (width/2 - 136, 290, 20, 50);
  ellipse (width/2 - 134, 288, 20, 50);
  ellipse (width/2 - 132, 286, 20, 50);
  ellipse (width/2 - 130, 284, 20, 50);
  ellipse (width/2 - 128, 282, 20, 50);
  ellipse (width/2 - 126, 280, 20, 50);
  ellipse (width/2 - 122, 270, 20, 25);
  ellipse (width/2 - 120, 268, 20, 25);

  ellipse (161, 296, 20, 25);
  ellipse (159, 298, 20, 25);
  ellipse (157, 300, 20, 25);
  ellipse (155, 302, 20, 25);
  ellipse (143, 296, 20, 50);
  ellipse (140, 294, 20, 50);
  ellipse (138, 292, 20, 50);
  ellipse (136, 290, 20, 50);
  ellipse (134, 288, 20, 50);
  ellipse (132, 286, 20, 50);
  ellipse (130, 284, 20, 50);
  ellipse (128, 282, 20, 50);
  ellipse (126, 280, 20, 50);
  ellipse (122, 270, 20, 25);
  ellipse (120, 268, 20, 25);

  //lineas mejillas
  strokeWeight(4);
  noFill ();
  stroke(0, 0, 0);
  bezier (287, 263, 270, 253, 364, 237, 354, 207);
  bezier (112, 263, 95, 253, 45, 237, 46, 207);


  println (mouseX + "," + mouseY);
}
