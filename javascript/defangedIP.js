let IP= "252.100.98.12"

function defangedIP(IP){
const arr=IP.split("")
for(let i=0;i<arr.length;i++){
    if(arr[i]=="."){
        arr[i]="[.]"
    }
}
let result=arr.join("")
console.log(result);
}
defangedIP(IP)