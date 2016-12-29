
//Que muestre 1x1=1/1x2=2/....

function stringMultiplicar(n) {
    
    var salida="";
    var multiplicacion=0;
    
    for(var i=1 ; i<=10; i++)
        {
            multiplicacion =i*n;
            salida += n+"x"+i+"="+multiplicacion;
            
       if(i<10){
            salida += "/";
               }
        }
    
       return salida;

}
