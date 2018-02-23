function Mostrar()
{

var largo = document.getElementById('alrgo').value;
var ancho = document.getElementById('ancho').value;

largo = parseInt(largo);
ancho = parseInt(ancho);

perimetro = (ancho * 2)  + (largo * 2) ;
var alambrado = perimetro *3;

alert("el alambrado usado es " + alambrado);

}
