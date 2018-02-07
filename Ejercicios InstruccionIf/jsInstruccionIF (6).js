function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;
if (edad>=18)
	{
		alert("usted es mayor de edad");
	}
if (edad>12 && edad<18)
	{
		 alert("usted es un adolescente");
	}
if (edad<13)
	{
		 alert("usted es un niño")
	} 




/* hecho por profe

var edad;
edad = document.getElementById('edad').value;
if (edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad>=18)
		{
			alert("mayor");
		} else
		{
			alert("adolescente");
		}
	}

*/

}//FIN DE LA FUNCIÓN