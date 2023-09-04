function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if (posX2+1 < cantidad - 1)
      posX2++;
  } else if (keyCode == LEFT_ARROW) {
    if (posX2-1 > 0)
      posX2--;
  } else if (keyCode == UP_ARROW) {
    if (posY2-1 > 0)
      posY2--;
  } else if (keyCode == DOWN_ARROW) {
    if (posY2+1 < cantidad - 1)
      posY2++;
  }
}
