let vowels= ["a","e","i","o","u","A","E","I","O","U"]
let string="Geeks for Geeks- An Education Platform"
function removeVowels(string){
    let result=""
    for(let i=0;i<string.length;i++){
        if(!vowels.includes(string[i])){
            result= result+string[i]
        }
    }
    console.log(result);
    return result
}
removeVowels(string)