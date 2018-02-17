function Mostrar()
{

var largo = document.getElementById('alrgo').value;
var ancho = document.getElementById('ancho').value;

largo = parseInt(largo);
ancho = parseInt(ancho);

perimetro = ancho + largo + largo;

alert("el alambrado usado es " + perimetro);

}
