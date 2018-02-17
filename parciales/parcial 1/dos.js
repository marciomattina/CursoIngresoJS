function Mostrar()
{
 // var importeFinal = document.getElementById('importeFinal').value;
 var importeFinal = prompt ("Ingrese importe final");
 importeFinal = parseInt (importeFinal);
 importeFinal = importeFinal + (importeFinal * 21 / 100);
 alert ("el importe mas iva es " + importeFinal);
}
