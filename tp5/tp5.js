// Sofia Sanchez - 91368/3
// https://youtu.be/zGSCbycXI5s?si=GP2Ow6xRolZ-aP-h

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
