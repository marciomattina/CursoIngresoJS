function Mostrar()
{
	var numeroActual = 0;
	var minimo = 0;
	var maximo = 0;
	var contador =0;
	var acumulador =0;
	var contadorNumerosPares =0;

	alert ("a continuación ingrese los numeros que quiera hasta que la respuesta sea diferente a si");



	for (i="si" ; i=="si" ; )
		{
			contador++;
			numeroActual = prompt ("ingrese numero : ");
			numeroActual = parseInt (numeroActual);

			while (numeroActual < 0)
				{
					numeroActual = prompt ("Por favor , ingrese un numero mayor a 0. ");
				}

			if (numeroActual%2==0)
			{
				contadorNumerosPares++;
			}

			acumulador = acumulador + numeroActual;


			if (contador == 1 ) 
				{ maximo = numeroActual;
				  minimo = numeroActual;
				} else 
					{
					if (numeroActual > maximo)
						{
							maximo = numeroActual;
						}
						else if (numeroActual < minimo)
						{
							minimo = numeroActual;
						}
					}

			i = prompt ("Desea ingresar otro numero?");

		}

		alert ("la cantidad de numeros pares es : " + contadorNumerosPares);
		alert ("El promedio de notas es de : " + (acumulador/contador));
		alert ("la nota mas baja es : " + minimo );
		alert ("el numero maximom es : " + maximo);
		alert (" la suma de todos los numeros es "  +acumulador);


}

