//CALLBACK SUMA
function operaciones(miSuma , miResta, miMultiplicacion, miDivision)
{
	miSuma(1,2);
	miResta(2,1);
	miMultiplicacion(7,3);
	miDivision(10,2);
}

operaciones(
	function(a,b){
		var s=a+b;
		alert("Suma "+s);
	},

	function(a,b){
		var r=a-b;
		alert("Resta "+r);
	},
	
	function(a,b){
		var m=a*b;
		alert("Multiplicación "+m);
	},
	
	function(a,b){
		var d=a/b;
		alert("División "+d);
	}
);
