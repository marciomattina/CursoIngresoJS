/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precioFinal;
 	var precioUni = 35;
 	var precioBruto;
 	var porcentajeDesc;

 	porcentajeDesc= 0;

 	cantidad = document.getElementById('Cantidad').value;
 	cantidad = parseInt(cantidad);
 	marca = document.getElementById('Marca').value;
 	precioBruto = cantidad * precioUni;


 	switch (cantidad)
 	{
 		case 1:
 		case 2:
 				porcentajeDesc = 0;
 				break;
 		case 3:
 				// usar switch dentro de switch para Marca
 				switch (marca)
 						{
		 						case ("ArgentinaLuz"):
		 						porcentajeDesc = 15;
		 						break;
		 						case ("FelipeLamparas"):
		 						porcentajeDesc = 10;
		 						break;
		 						default : 
		 						porcentajeDesc = 5;
		 						break;
 						}
 					break;

 		case 4: 
 				switch (marca)
 						{
		 				case ("ArgentinaLuz"):
		 					porcentajeDesc = 25;
		 					break;
		 				case ("FelipeLamparas"):
		 					porcentajeDesc = 25;
		 					break;
		 				default:
		 					porcentajeDesc = 20;
		 					break;
		 				}
		 		break;
		 case 5: 
		 		switch (marca)
		 				{
			 				case ("ArgentinaLuz"):
			 				porcentajeDesc = 40;
			 				break;
			 				default : 
			 				porcentajeDesc = 30;
			 				break;
			 			}
		 		break;
		 case 6 : 
		 			porcentajeDesc = 50;
		 			break;
		 default:
		 			porcentajeDesc = 0;
		 			break;


 	}



/*

 	if (cantidad >5)
 	{
 		porcentajeDesc = 0.5 ;  
 	}

 	else  
 	{
 			if (cantidad ==5)
 			{
 					if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 					{
						porcentajeDesc = 0.4;
					} else 

					{
						porcentajeDesc = 0.3;
					}
 			}

 			else 

 			{
 				if (cantidad==4)
 				{
 					 	if ()
 					 	{
 					 			porcentajeDesc = 0.25;
 					 	}
 					 	else
 					 	{
 					 			porcentajeDesc = 0.2;
 					 	}
 				}
 			}

 			else
 			{
 				if (marca=="ArgentinaLuz")
 				{
 				   porcentajeDesc = 0.15;
 				} else
 				{
 					if(marca=="FelipeLamparas")
 					{
 						porcentajeDesc = 0.10;
 					}
 					else
 					{
 							porcentajeDesc = 0.05;
 					}
 				}
 			}
 	}

*/
 	precioFinal = precioBruto + (precioBruto * porcentajeDesc);
 	/*if (precioFinal > 120)
 	{

 		iibb = precioFinal * 0.1;
 		precioFinal = precioFinal * iibb;

 		precioFinal = precioFinal - precioFinal * 0.1;
 	}
 	*/

 	document.getElementById('precioDescuento').value = precioFinal;
}
