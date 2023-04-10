// find duplicate element in an array 

const array = [1, 2, 37, 2, 4, 5, 3, 4, 39];
const length = array.length;

for (i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
        if (array[i] === array[j]) {
            console.log(array[i])
        }
    }

}

