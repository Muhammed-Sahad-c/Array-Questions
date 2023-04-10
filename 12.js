//largest and smallest array elements.

var array = [1, 2, 3, 4, 5, 6, 7];
var length = array.length;
var largest = array[0];
var smallest = array[0];

for (i = 0; i <= length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }

    if (array[i] < smallest) {
        smallest = array[i]
    }
}


console.log(`largest is ${largest}`)
console.log(`smallest is ${smallest}`)