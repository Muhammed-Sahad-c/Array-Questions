// find the frequency of the array elements.

const array = [1, 2, 3, 4, 5, 4];

const length = array.length;
var checkedArray = []
var count;

for (i = 0; i < length; i++) {
    count = 0
    for (j = 0; j < length; j++) {
        if (array[i] == array[j] && checkedArray.indexOf(array[i])) {
            count++
        }
    }
    if (count > 1) { checkedArray[checkedArray.length] = array[i] }
    if (count == 0) { break } else {
        console.log(`${array[i]} occurred  ${count} times.`)
    }
}

