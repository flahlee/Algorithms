// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that form the same word if it is reversed.

// 1. SOLUTION
funtion palindrome(str){
    const reversed = str.split('').reversed().join('');

    return str === reversed;
}

// 2. SOLUTION
funtion palindrome(str){
    return str.split('').every((char,1) => {
        return char === str[str.length -i -1];
    });
}