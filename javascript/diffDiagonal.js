
function diffDiagonal(arr){
let row= arr.length;
let col= arr[0].length;
let d1=0;
let d2=0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(i==j){
                d1=d1+arr[i][j]
            }
            if(i+j==col-1){
                d2=d2+arr[i][j]
            }
        }
    }
    let ans=d1-d2;
    return ans>0?ans:0-ans
}

console.log(diffDiagonal([[1,5,8],[2,4,7],[8,9,0]]));