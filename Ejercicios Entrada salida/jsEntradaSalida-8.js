/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
		var resultado;   
		var numeroUno;
		var numeroDos;

		numeroUno = document.getElementById('numeroDividendo').value;
		numeroDos = document.getElementById('numeroDivisor').value;
		numeroUno= parseFloat(numeroUno);
		numeroDos= parseFloat(numeroDos);
		resultado = numeroUno%numeroDos;
		alert(resultado);
}
