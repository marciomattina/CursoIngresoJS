function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroActual;

	alert ("Porfavor ingrese 5 numeros");

	while (contador < 5)
			{
				contador++;
				numeroActual = prompt ("por favor ingrese un numero");
				numeroActual = parseInt(numeroActual);
				acumulador = numeroActual + acumulador;
			}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN