/*

ej.: "El resto es 0 ."*/
function SacarResto()
{   
	
	var resto;
	var dividendo
    var divisor
    dividendo=txtNumeroDividendo.value;

	divisor=txtNumeroDivisor.value;

	dividendo=parseInt(dividendo);

	divisor=parseInt(divisor);


	resto= dividendo % divisor;


	alert("el resto es " + resto);
}
