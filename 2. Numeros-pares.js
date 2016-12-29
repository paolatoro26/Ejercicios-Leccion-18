

//Realice un algoritmo para generar y devolver la suma de los numeros pares que se encuentran entre 0 y un numero dado.

function sumaPares(n) {
    var total=0
    for(var i=0; i<=n; i+=2 )
    {
        total=total+i
    }

return total
}
