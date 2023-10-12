//Find the Smallest and largest word in a sentence
function findSmallLarge(sentence) {
    let senArray = sentence.split(" ");
    let smallest = senArray[0]; // Initialize smallest and largest with the first word
    let largest = senArray[0];

    for (let i = 1; i < senArray.length; i++) { 
        if (senArray[i].length < smallest.length) {
            smallest = senArray[i];
        }
        if (senArray[i].length > largest.length) {
            largest = senArray[i];
        }
    }

    console.log(`The smallest word is: ${smallest}`);
    console.log(`The largest word is: ${largest}`);
}

findSmallLarge("Look at the nearest temple");