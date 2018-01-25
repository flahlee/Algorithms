// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1. SOLUTION
function revserseItn(n){
    const reversed = n.toString().split().reverse().join('');
    if (n<0){
        return parseItn(reversed) * -1;
    }
    elsereturn parseItn(reversed);
}

// 2. SOLUTION
function reverseInt(n){
    const reversed = n.toString().split().reverse().join('');
    return parseInt(reversed) * Math.sign();
}