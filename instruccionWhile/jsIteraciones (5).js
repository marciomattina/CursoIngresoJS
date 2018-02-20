function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo !="f" && sexo !="m")
	{
		sexo = prompt ("Ingrese f para femenino o m para masculino");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN