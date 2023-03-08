/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    }else if(x>0){
        let result = 0;
        let y=x;
        while(x!=0){
         let n = x %10;
         x = Math.floor(x/10);

         result = result*10 +n;
         console.log({result})
        }
         if(result==y){
             return true;
         }
         return false;
    } else{
        return true;
    }
 };
 console.log(isPalindrome(121))