function Mostrar()
{
	var numeroActual = 0;
	var sexo;
	var minimo = 0;
	var maximo = 0;
	var contador =0;
	var acumulador =0;
	var contadorvseisomas=0;

	alert ("a continuación ingrese 100 notas de alumnos , uno por dia ( uno a la vez ) ");



	for (i=0 ; i<10 ; i++)
		{
			contador++;
			numeroActual = prompt ("ingrese nota de alumno numero : " + (i+1));
			numeroActual = parseInt (numeroActual);

			while (numeroActual <= 0)
				{
					numeroActual = prompt ("Por favor , ingrese un numero entre 0 y 10. Ingrese nota de alumno numero : " + (i+1));
				}

				sexo = prompt ("ingrese sexo de alumno numero" + (i+1));

			while (sexo != "f" && sexo !="m")
				{
					sexo = prompt ("Por favor , ingrese 'f' para sexo femenino o 'm' para sexo masculino. Ingrese sexo de alumno numero " + (i+1));
				}


			acumulador = acumulador + numeroActual;

			if (numeroActual >= 6 && sexo=="m")
				{
					contadorvseisomas++;
				}

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
		}

		alert ("El promedio de notas es de : " + (acumulador/100));
		alert ("la nota mas baja es : " + minimo );
		alert ("el contador de la cantidad de varones que su nota haya sido mayor o igual a 6 es : "  +contadorvseisomas);


}
