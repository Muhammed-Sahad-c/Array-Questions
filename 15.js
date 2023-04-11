// delete duplicate elements in an array

let array = [1, 2, 3, 2, 4, 5, 6, 7];
let length = array.length;
let temp;
let user = 2;

//removed duplicate variables.
for (i = 0; i < length; i++) {
    let flag = false
    for (j = i + 1; j < length; j++) {
        if (array[i] === array[j]) {
            flag = true;
        }
    }
    if (flag) {
        for (k = i; k < length; k++) {
            array[k] = array[k + 1]
        }

        length--;
    }
}


// sorting
for (i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}



console.log(array[user - 1])