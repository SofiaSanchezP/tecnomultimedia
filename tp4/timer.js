function timer () {
  textSize (10);
  if (m == 10)
    fill (139, 155, 56);
  else
    fill (92, 155, 56);
  if (m == 11)
    fill (198, 193, 36);
  if (m == 12)
    fill (211, 153, 60);
  if (m == 13 || m == 14)
    fill (211, 85, 60);

  if (m == 15)
    conteo = 4;

  if (s <= 59 && m != 15) {
    s++;
  } else {
    if (s == 60) {
      m++;
      s = 0;
    }
  }

  textSize (10);
  text ("Tiempo: " + nf (m, 2)+":" + nf (s, 2), 290, 18);
}
