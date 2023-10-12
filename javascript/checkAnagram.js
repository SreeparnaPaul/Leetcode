function areAnagrams(str1, str2) {
    // Remove spaces and convert both strings to lowercase to make the comparison case-insensitive and space-insensitive.
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Check if the lengths of the two strings are the same.
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters in both strings and compare them.
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen to me";
const string2 = "silent me to";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
