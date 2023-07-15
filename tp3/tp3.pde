// https://youtu.be/nK7f-A7tgC8
// Sofia Sanchez Ponce - 91368/3


int pantalla = 0; //cambio de pantalla
PImage [] fondos = new PImage [13]; //fondos de las pantallas
String [] textos = new String [10]; 
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

  textos[1] = "Había una vez una niña llamada Caperucita Roja, así llamada por la capa de color rojo que siempre llevaba puesta. Un día, su madre le pidió que llevara una cesta de comida a su abuelita, que vivía al otro lado del bosque. Caperucita Roja tomó la cesta y se dirigió al bosque. Su madre le advirtió que no se detuviera en el camino, ya que había peligros acechando.";
  textos[2] = "Caperucita Roja, en lugar de seguir el camino principal, decide tomar un atajo por un sendero desconocido en el bosque. Mientras se aventura, se encuentra con un zorro astuto que le ofrece ayuda para llegar a casa de su abuelita. Confiada en la apariencia amistosa del zorro, Caperucita Roja acepta su ayuda y juntos llegan a la casa de la abuelita. Resulta que el zorro era un amigo cercano de la familia y solo quería asegurarse de que Caperucita Roja llegara a salvo. Todos celebran un alegre encuentro y disfrutan de un delicioso banquete.";
  textos[3] = "Caperucita Roja, mientras camina hacia la casa de su abuelita, se encuentra con un cazador amigable que le advierte sobre el lobo que acecha en el bosque. Juntos, deciden idear un plan para atrapar al lobo y proteger a la abuelita. Caperucita Roja y el cazador construyen una trampa ingeniosa y, cuando el lobo aparece en la casa de la abuelita, cae en la trampa y queda atrapado. La abuelita, Caperucita Roja y el cazador celebran su victoria, y el lobo aprende una lección sobre el respeto y la amistad.";
  textos[4] = "Caperucita Roja, desobedeciendo las advertencias de su madre, decide explorar un sendero diferente en el bosque. Mientras camina, se encuentra con un grupo de simpáticos duendes que la invitan a jugar. Caperucita Roja acepta la invitación y pasa un día maravilloso con ellos, disfrutando de juegos y risas. Al atardecer, los duendes la escoltaron de regreso a casa y Caperucita Roja aprende la importancia de seguir las reglas y de hacer nuevas amistades.";
  textos[5] = "Caperucita Roja, siendo una niña curiosa, se distrajo con las flores y los animalitos del bosque. Mientras tanto, un lobo hambriento había visto a Caperucita Roja y decidió seguirla para aprovechar la oportunidad y comerse a su abuelita y a ella. El lobo, más astuto que la niña, corrió hacia la casa de la abuelita y llegó antes que Caperucita. Cuando Caperucita Roja finalmente llegó a la casa de su abuelita, tocó a la puerta. El lobo, disfrazado con la ropa de la abuelita, le pidió que entrara.";
  textos[6] = "Caperucita Roja se da cuenta del lobo a tiempo y logra escapar de la casa de su abuelita. Corre hacia el cazador que pasaba por el bosque y le cuenta lo que ha sucedido. Juntos, regresan a la casa de la abuelita y encuentran al lobo atrapado en una red que el cazador había tendido. El lobo es llevado lejos del bosque y Caperucita Roja y su abuelita viven felices y seguras.";
  textos[7] = "Caperucita Roja notó que su abuelita parecía diferente, con unas grandes orejas y una nariz muy peluda. Un poco confundida, le preguntó: 'Abuelita, ¿por qué tienes los ojos tan grandes?'. El lobo respondió: 'Es para verte mejor, querida'. Caperucita Roja, aún sin sospechar nada, continuó preguntando por las orejas, la boca y los dientes del lobo, y este le daba respuestas similares. Finalmente, Caperucita Roja se dio cuenta de que algo no estaba bien. En ese momento, el lobo saltó de la cama y trató de atraparla, pero Caperucita Roja, asustada pero valiente, corrió y gritó pidiendo ayuda.";
  textos[8] = "Un cazador que pasaba por allí escuchó los gritos y corrió hacia la casa. Al entrar, vio al lobo intentando atrapar a Caperucita Roja y rápidamente sacó su cuchillo. El cazador luchó contra el lobo y logró salvar a la niña y a su abuelita.Desde ese día, Caperucita Roja aprendió la importancia de obedecer a sus padres y no hablar con extraños en el camino. Agradecida por el valiente cazador, ella y su abuelita le dieron las gracias y prometieron ser más cuidadosas en el futuro.";
  textos[9] = "Y así termina la historia de Caperucita Roja según la versión de Charles Perrault, una historia que nos enseña importantes lecciones sobre la obediencia y la precaución al interactuar con extraños.";
}

void draw () {
  textFont (fuente);
  background (189, 55, 59);
  pantallas ();
}
