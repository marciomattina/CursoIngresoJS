function Mostrar()
{

	var numeroActual = 0;
	var minimo = 0;
	var maximo = 0;
	var contador =0;

	alert ("a continuación ingrese 24 importes , uno por dia ( uno a la vez ) ");



	for (i=0 ; i<24 ; i++)
		{
			contador++;
			numeroActual = prompt ("ingrese importe del dia : " + (i+1));
			numeroActual = parseInt (numeroActual);

			while (numeroActual <= 0)
				{
					numeroActual = prompt ("Por favor , ingrese un numero mayor a 0. Ingrese importe del dia : " + (i+1));
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

		alert(" el importe de valor maximo es : " + maximo +
			  "  y el valor minimo es : " + minimo );
		
}
