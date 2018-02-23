function Mostrar()
{
		var numero1=0;
		var numero2=0;
		var total;

		alert ("A continuación ingrese dos numeros por separado");

		numero1 = prompt ("Ingrese numero 1 ");
		numero2 = prompt ("Ingrese numero 2 ");
		numero1 = parseInt (numero1);
		numero2 = parseInt (numero2);

		if (numero1 == numero2)
			{
				total = numero1 * numero2;
			}

		else if (numero1 > numero2)
			{
				total = numero1 - numero2;
			}
		else
			{
				total = numero1 + numero2;
			}

		document.write ("el total es : " + total);
}
