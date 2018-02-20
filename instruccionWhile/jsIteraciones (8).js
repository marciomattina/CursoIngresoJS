function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroActual;
	
	var respuesta='si';

alert ("Por favor ingrese numeros hasta que la respuesta sea diferente a si");

	while (respuesta == "si")
			{
				contador++;
				numeroActual = prompt ("por favor ingrese un numero");
				numeroActual = parseInt(numeroActual);
				

				positivo = numeroActual + acumulador;
				respuesta = prompt ("Quiere continuar agregando numeros?");
			}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN