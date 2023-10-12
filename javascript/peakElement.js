//Find a peak element in array which is not smaller than its neighbours
function peakElement(arr){
    let peakElement;
    if(arr.length==1) return peakElement = arr.toString();
    if(arr[0]>=arr[1]) return peakElement =arr[0];
    if(arr[arr.length-1]>=arr[arr.length-2]) return peakElement =arr[arr.length-1]
    for(let i=1;i<arr.length;i++){
        if((arr[i]>=arr[i-1] && arr[i]>=arr[i+1])){
           return peakElement = arr[i]
        }
       
    }
}
console.log("peak Element",peakElement([6,9,10,8,0]));