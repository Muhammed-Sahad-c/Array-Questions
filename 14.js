// smallest and second smallest.

const array = [2, 1, 0, 3, 4, 5, 6];

let length = array.length

let smallest = array[0];
let secondSmallest = array[0]

for (i = 0; i < length; i++) {
    if (array[i] < smallest) {
        secondSmallest = smallest
        smallest = array[i]
    } else if (array[i] < secondSmallest && array[i] >= smallest) {
        secondSmallest = array[i]
    }
}

console.log(`smallest is ${smallest}`)
console.log(`second smallest is ${secondSmallest}`)