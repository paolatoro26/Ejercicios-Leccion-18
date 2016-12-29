

//Si el numero n es negativo o 0 que retorne "null"

function factorial(n) {
    
    var producto =1;
    
    for(var i=1; i<=n ; i++){
        
        producto=producto*i;
    }
      if(n<=0){                                                                                                                               
         return null ;
      }else{
          return producto ;
      }  

}
