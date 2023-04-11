// find the numbers if it duplicate print it once.

var array = [1, 2, 3, 4, 5, 3, 4, 4, 3,5,5];
var length = array.length;
var numbers = [];


for (i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
        if ( numbers.indexOf(array[i]) === -1) {
            numbers[numbers.length] = array[i];
        }
    }
}

console.log(`total numbers are ${numbers}`)