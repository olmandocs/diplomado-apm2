//tienen alcance para todo el script
var a=8;
var b=4;

function comparar(){
	//si se declara aca tiene solo alcance a la función
	if(a>b)
	{
		alert("a es mayor que b");
	}
	else
	if(a<b)
	{
		alert("a es menor que b");
	}
}

comparar();
//n parametros, ARGUMENTS y un ciclo for