// second largest 


var array = [6, 1, 8, 2, 3, 7, 4, 5];

var length = array.length;

var largest = array[0];
var secondLargest = array[0]

for (i = 0; i < length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i]
    } else if (array[i] > secondLargest && array[i] < largest) {
        secondLargest = array[i]
    }
}

console.log(`largest is ${largest}`)
console.log(`second largest is ${secondLargest}`)