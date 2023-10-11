let jewels ="aAC"
let stones= "aAghbrcC"
let count=0
function findJewelInStone(stones){
    let jwArr= jewels.split("")
    for(let i=0;i<stones.length;i++){
        if(jwArr.includes(stones[i])){
            count = count+1
        }
    }
console.log(count);
}
findJewelInStone(stones)