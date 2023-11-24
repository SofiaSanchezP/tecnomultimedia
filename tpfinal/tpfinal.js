//GRUPO 10
//Lautaro Moscardi - 91543/9
//Sofia Sanchez - 91368/3

let obcuento;

function setup() {
  createCanvas (600, 600);
  obcuento = new Cuento ();
}


function draw() {
  background (189, 55, 59);
  obcuento.dibujar();
}

function keyPressed() {
  obcuento.teclas(keyCode);
}


function mousePressed(event) {
  obcuento.botones(event);
}
