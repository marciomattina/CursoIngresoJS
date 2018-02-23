function Mostrar()
{
	var diadelasemana
	diadelasemana = prompt ("ingrese un dia de la semana");

	switch (diadelasemana)
	{
		case ("lunes") :
		case ("martes") :
		case ("miercoles") :
		case ("jueves") :
		case ("viernes") :
					alert ("A trabajar!");
					break;
		case ("sabado") :
		case ("domingo") :
					alert ("Es fin de semana!");
	}
}
