


var array = [4, 6, 8, 9, 3, 4];
var length = array.length
var count;
var uniqueNumbers = [];
for (i = 0; i < length; i++) {
    count = 0
    for (j = 0; j < length; j++) {
        if (array[i] == array[j]) {
            count++;
        }
    }
    if (count == 1) {
        uniqueNumbers[uniqueNumbers.length] = array[i]
    }
}



console.log(`unique numbers are ${uniqueNumbers}`)