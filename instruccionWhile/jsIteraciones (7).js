function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	alert ("Por favor ingrese numeros hasta que la respuesta sea diferente a si");

	while (respuesta == "si")
			{
				contador++;
				numeroActual = prompt ("por favor ingrese un numero");
				numeroActual = parseInt(numeroActual);
				acumulador = numeroActual + acumulador;
				respuesta = prompt ("Quiere continuar agregando numeros?");
			}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN