function getNumberOfDigits(number){
   for(let i = number; i!=0; i--){
    if(number%10 == 0){
        return i;
    }
   }
}