// Remoe n th element in an array

const array = [1, 2, 3, 4, 5, 6, 7];
var n = 1;
var length = array.length;

n = n - 1;

for (i = n; i < length; i++) {
    array[i] = array[i + 1];
    length--;
}


console.log(array)