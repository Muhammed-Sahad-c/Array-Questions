//Find the count of the negative numbers and sum of the positive numbers

const array = [1, 2, -3, 5, -3, 2, 4, -2];

const length = array.length;

var count = 0;
var sum = 0;

for (i = 0; i < length; i++) {
    if (array[i] >= 0) {
        sum += array[i]
    } else {
        count++
    }
}

console.log(`count of negative number is ${count}`);
console.log(`sum of the positive numbers is ${sum}`)