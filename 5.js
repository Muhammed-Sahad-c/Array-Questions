// find duplicate element in an array 

const array = [1, 2, 37, 2, 4, 5, 3, 4, 39];
const length = array.length;
let duplicateNumbers = []

for (i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
        if (array[i] === array[j] && duplicateNumbers.indexOf(array[i]) === -1) {
            duplicateNumbers[duplicateNumbers.length] = array[i];
        }
    }

}



console.log(`duplicate numbers are ${duplicateNumbers}`)