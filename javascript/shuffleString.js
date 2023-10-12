let string="Memory";
let indices=[1,2,0,3,4,5];
let shuffle="";
let arr=[]
function ShuffleString(string,indices){
    for(let i=0;i<indices.length;i++){
       arr[indices[i]] = string.charAt(i)
    }
    for(let i=0;i<arr.length;i++){
        shuffle+=arr[i]
    }
    return shuffle
}
console.log("Shuffle String: ",ShuffleString(string,indices));
