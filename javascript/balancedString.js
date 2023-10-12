let lCount=0;
let rCount=0;
let ans=0;
function balancedString(s){
    for(let i =0;i<s.length;i++){
        if(s[i]==='R'){
            rCount++;
        }
        else{
            lCount++; 
        };
        if(lCount==rCount){
           ans++
        }
        
    }
    console.log(ans);
}
balancedString('LRLRRLRLLR');
