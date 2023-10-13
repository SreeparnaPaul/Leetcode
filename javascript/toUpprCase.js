function customToUpperCase(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char >= 'a' && char <= 'z') {
        // Convert lowercase letter to uppercase using ASCII values
        result += String.fromCharCode(char.charCodeAt(0) - 32);
      } else {
        // Keep non-alphabetic characters as they are
        result += char;
      }
    }
    return result;
  }
  
  const originalString = "Hello, World!";
  const uppercasedString = customToUpperCase(originalString);
  console.log(uppercasedString); // Output: "HELLO, WORLD!"
  