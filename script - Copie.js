
function auClic(event)
{
  //document.querySelector("body").
  setTimeout(rétablirCurseur, 250);
}



function rétablirCurseur()
{

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




//nombre de cycle avant décroissance (freeCycles)
//multi paramètre : ammortissement de descente
//rajouter une possibilité d'assymétrie ?
//speed, fréquence , abscisse, vitesse_relative_de_decroissance
//coupler le 1/(1+x) à une double pente descendante et prendre le max pour un meilleur rendu
//frequency est en ms
//on peut aussi mettre un augmentateur de montée pour la première montée au centre
//comme par exemple un second pondérateur lui aussi basé sur un 1/(1+x)
//on peut faire spawn les gouttes d'eau au clic (même sur des éléments intéractifs)
function ponderateurPositionnelTemporel(origin_abscissa, abscissa
  , elapsed_time, speed, frequency, freeCycles)
{
  //renvoie l'offset vertical pour les courbes de bézier
  if(elapsed_time <= 0)
    return 0;
  //éventuellement ne propager qu'à partir de la première vague en positif
  //peut être faire en sorte que la valeur ne décroisse qu'à partir de la seconde
  //vague en positif
  //penser à rajouter une diminution forte de la première vague en négatif (donc)
  cyclesNumber = (elapsed_time - (Math.abs(abscissa - origin_abscissa) / speed))
    * frequency;
  cyclesNumber = Math.max(0, cyclesNumber)

  cyclesNumber_t = Math.max(0, elapsed_time * frequency);

  ponderateur_t = 0;
  ponderateur_x = 0;
  ponderateur = ponderateur_t * ponderateur_x;

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










