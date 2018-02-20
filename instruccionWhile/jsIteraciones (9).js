function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;

	// declarar variables
	
	var respuesta='si';

	alert ("Por favor ingrese numeros hasta que la respuesta sea diferente a si");

	while(respuesta=='si')
	{
		contador++;
		numero = prompt ("Por favor ingrese un numero");
		numero = parseInt(numero);

		if (contador == 1)
			{
				maximo = numero;
				minimo = numero;
			}
			else
			{
					if (numero>maximo)
					{
						maximo = numero;
					}
					if (numero<minimo)
					{
						minimo = numero;
					}
			}
		respuesta = prompt ("Desea ingresar otro numero?");
	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN