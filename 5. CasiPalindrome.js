

function casiPalindrome(palabra) {
    var tama=palabra.length;
    var casiPalindrome;
    var count=0;
    
    for(var i=0,j=tama-1;i<tama/2,j>tama/2;i++,j--)
        {
            if(palabra[i]!= palabra[j]){
                count ++;
            }
        }
    if(count<=2){
        casiPalindrome=true;
    }else{
        casiPalindrome=false;
    }
    return casiPalindrome;

}
