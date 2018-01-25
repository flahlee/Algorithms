// Given a string, return a new string with the reversed order of characters

// 1. SOLUTION
function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;

// 2. SOLUTION
function reverse(str){
    let reverse = '';
    for (let character of str){  //same as for(var i=0; i<str.length; i++)
        reversed = character + reversed;
    }
    return reversed;
}
module.exports = reverse;