function checkEvenOdd(n){
    if(n==0){
        return "neither even nor odd";
    }
    else if((n%2 == 0) && n!=0 ){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(checkEvenOdd(8));