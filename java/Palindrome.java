 public class Palindrome {
    public static boolean isPalindrome(int x) {
       if(x<0) {
        return false;
    }else if(x>0){
        int result = 0;
        int y=x;
        while(x!=0){
        int n = x %10;
         x = x/10;
         result = result*10 +n;
        }
         if(result==y){
             return true;
         }
         return false;
    } else{
        return true;
    }  
    }

       public static void main(String[] args) {
        
            System.out.println(isPalindrome(121));
        }
    }
