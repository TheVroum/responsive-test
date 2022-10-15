
function auClic(event)
{
  document.querySelector("body").style
  .cursor = "url(shower_cursor.svg), auto";//"none";url(shower.svg)
  //document.querySelector("body").
  //alert("au clic");
  setTimeout(rétablirCurseur, 200);
}



function rétablirCurseur()
{
  //douche = document.querySelector("#doucheFauxCurseur");
  //douche.style.visibility = "hidden";
  document.querySelector("body").style
  .cursor = "revert";
  //alert("rétablirCurseur");
}






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function fuunc()
{
    
    section = document.getElementsByTagName('section')[0];
    section.style.top = "100px";
    section.style.position = "relative";
}

function sigmoid(z)
{
    return 1 / (1 + Math.exp(-z));
}

function getWidth()
{
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}


function stdNormalDistribution(x)
{
    //return Math.pow(Math.E,-Math.pow(x,2)/2)/Math.sqrt(2*Math.PI);
    1 / (1 + Math.abs(x));
    return Math.max(0, 1 - Math.abs(x)/5, 0.5 - Math.abs(x)/20);
}


function actualizeBlur(event)
{
    //alert("called");
    var xCursorPosition = event.clientX;
    var yCursorPosition = event.clientY;
    document.querySelector
    ('#eighth-test > div:nth-child(1)').innerHTML = yCursorPosition;
    document.querySelector
    ('#eighth-test > div:nth-child(2)').innerHTML = xCursorPosition;
    /*afficheur = document.querySelector
    ('#eighth-test > div:nth-child(3)').innerHTML;*/
    
    elementMouvant = document.querySelector
    ('#ninth-test');

    tl = (sigmoid((xCursorPosition - (getWidth()/2))/400) * 20) - 10;
    document.querySelector
    ('#eighth-test > div:nth-child(3)').innerHTML = tl;
    
    elementMouvant.style.transform = "translateX("
        + tl + "px)";

    t2_el = document.querySelector("#ninth-test>div:nth-child(3)");
    t2_bottom = t2_el.getBoundingClientRect().bottom;

    deviations = 10 * (t2_bottom - yCursorPosition) / (300);
    blur_strenght = 4 * (stdNormalDistribution(0) - stdNormalDistribution(deviations));
    //alert(blur_strenght);
    /*alert(t2_bottom + "\n" + yCursorPosition + "\n" + deviations + "\n" +
    "" + "\n" + stdNormalDistribution(0) + "\n" + blur_strenght);*/

    document.querySelector("#ninth-test>div:nth-child(3)").style.filter =
    "blur(" + blur_strenght + "px)";

    document.querySelector
    ('#repr-1').style.
    transform = "translateY(" + blur_strenght * 20 + "px)";

    document.querySelector
    ('#repr-1').style.
    backgroundColor = "#bbbbff";
    document.querySelector
    ('#repr-1').style.
    visibility = "hidden";

    // Penser à ajuster la variance comme je veux, et ensuite à modifier en
    //fonction le premier terme de la soustraction pour annuler le flou au bon endroit.
}




/*document.body.onkeydown = function */
function jumper
(event)
{
    /*alert(event.key);*/
    if(event.key == "Enter")
    {
        document.querySelector
        ("form > div:nth-child(2) > input").focus();
    }
}


/*
  $(function () {
    $('#inputform').on('keydown', 'input', function (event) {
      if (event.which == 13) {
        $(this).next('input').focus();
        event.preventDefault();
      }
    });
  });
*/











//multi paramètre : ammortissement de descente
//rajouter une possibilité d'assymétrie ?

// - freeCycles : peut être faire en sorte que la valeur
//ne décroisse qu'à partir de la seconde vague en positif
//on peut faire spawn les gouttes d'eau au clic (même sur des éléments intéractifs)

//éventuellement ne propager qu'à partir de la première vague en positif

//coupler le 1/(1+x) à une double pente descendante(c - d*abs(dist)) et prendre le max pour un meilleur rendu
// - on peut aussi mettre un augmentateur de montée pour la première montée au centre
//comme par exemple un second pondérateur lui aussi basé sur un 1/(1+x). Finalement
//je fais une disjonction de cas en fonction de la période (ou demi période) courante
//avec plusieurs fonctions pour les pondérateurs. Veiller à ne couper que sur n*0.5.

function ponderateurPositionnelTemporel(
    origin_abscissa
  , abscissa//abscisse
  , elapsed_time
  , speed//speed
  , frequency//frequency est en Hz
  , freeCycles//nombre de cycle avant décroissance (freeCycles)
  , xMinPonderation//minimum pour le pondérateur temporel
  , xReductionCoefficient//vitesse de décroissance spatiale
  , tReductionCoefficient//vitesse de décroissance temporelle
  , cyclesEndNumber//nombre d'oscillation bas-haut total (la première étant privée de son bas)
  , spatialBaseline
  )
{
  //voir si lorsque l'on s'éloigne en distance, il n'y a pas double pondération
  //avec le temps en plus.
  elapsed_time /= 1000;//convertit les ms en s.
  //Cette fonction renvoie l'offset vertical pour les courbes de bézier. Ou pas ?
  if(elapsed_time <= 0)
    return 0;

  //ne déclencher la transmission qu'à partir du premier positif ?
  //penser à rajouter une diminution forte de la première vague en négatif (donc)
  cyclesNumber = (elapsed_time - (Math.abs(abscissa - origin_abscissa) / speed))
    * frequency;
  cyclesNumber = Math.max(0, cyclesNumber)

  cyclesNumber_t = Math.max(0, elapsed_time * frequency);
  cyclesNumber_dist = frequency * Math.abs(origin_abscissa - abscissa) / speed;

  if(cyclesNumber < 0.5)//commence par la première demie période négative
  {
    //amorti, ne propage pas en espace
  }
  else if(cyclesNumber < 1)
  {
    //élevé, propage comme un classique non amorti par le temps 
  }
  else if(cyclesNumber < 2)
  {

  }
  else if(cyclesNumber < cyclesEndNumber)
  {
    //ponderateur_t = 
  }

  else
    return 0;

  /*ponderateur_t = 0;
  ponderateur_dist = 0;*/
  ponderateur = ponderateur_t * ponderateur_dist;

        /*document.querySelector
        ('#')*/
}

function traceur(event)
{
  rect = event.target.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
  path = document.querySelector("#traceur>path");
  initial = path.getAttribute("d");
  initial_copy = structuredClone(initial).slice(0, -2);
  initial_copy = initial_copy.split(" ").slice(-2);
  x_i = (parseInt(initial_copy[0]) + x) / 2;
  y_i = (parseInt(initial_copy[1]) + y) / 2;
  /*alert(initial + " " +
  x_i + " " + y_i + ", " + x + " " + y + ", ");*/
  path.setAttribute("d", initial + " " +
  x_i + " " + y_i + ", " + x + " " + y + ", ");
  //alert(initial + " " + x + " " + y + ", ")
}





function spawnTestDrop()
{
  document.querySelector("#drop").classList
  .add("fallingTestDrop");
  setTimeout(cleanSpawnTestDrop, 500);
  /*setTimeout(cleanSpawnTestDrop2, 1000);*/
}




function cleanSpawnTestDrop()
{
  /*document.querySelector("#drop").style
    .transitionProperty = "width";/*"none";*/
  document.querySelector("#drop").classList
    .remove("fallingTestDrop");
  //sleep(1000);
}







/*
function cleanSpawnTestDrop2()
{
  document.querySelector("#drop").style
    .transitionProperty = "top";
}*/















