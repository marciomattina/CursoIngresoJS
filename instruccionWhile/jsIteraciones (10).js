function Mostrar()
{

	var numeroActual;
	var contador=0;
	var sumaPositivo=0;
	var sumaNegativo=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorNumerosPares=0;


	//declarar contadores y variables 
	
	var respuesta="si";

	alert ("Por favor ingrese numeros hasta que la respuesta sea diferente a si");

	while (respuesta == "si")
			{
				contador++;
				numeroActual = prompt ("por favor ingrese un numero");
				numeroActual = parseInt(numeroActual);
				
				if (numeroActual>0) { contadorPositivos++; }
				if (numeroActual<0) { contadorNegativos++; }
				if (numeroActual==0) { contadorCeros++;}
				if (numeroActual%2==0) {contadorNumerosPares++;}

				if (numeroActual>0)
					{
						sumaPositivo = numeroActual + sumaPositivo;	
					}
				if (numeroActual<0) 
					{
						sumaNegativo = sumaNegativo+ numeroActual;	
					}
				respuesta = prompt ("Quiere continuar agregando numeros?");
			}

	document.write ("la suma de los positivos es :  " + sumaPositivo + "<br>" );		
	document.write ("la suma de los negativos es :  " + sumaNegativo + "<br>");
	document.write ("el contador de Positivos es  :  " + contadorPositivos + "<br>");
	document.write ("el contador de Negativos es  :  " + contadorNegativos + "<br>");
	document.write ("el contador de Ceros es  :  " + contadorCeros + "<br>");
	document.write ("el contador de numeros Pares es  :  " + contadorNumerosPares + "<br>");		
	document.write ("el promedio de numero positivos es :  " + (sumaPositivo / contador) + "<br>");
	document.write ("el promedio de numeros negativos es  :  " + (sumaNegativo / contador)+ "<br>");
	document.write ("la diferencia entre positivos y negativos es   :  " + (sumaPositivo - sumaNegativo)+ "<br>");
			
			
		




}//FIN DE LA FUNCIÓN