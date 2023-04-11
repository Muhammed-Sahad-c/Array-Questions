// sum should be 50 and contain maximum elements.

var array1 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
var array1Lenght = array1.length;
var array2 = [25, 25, 15, 15, 20];
var array2Length = array2.length;
var mergedArray = [];
var temp;
var outputArray = [];
var sum = 0;

// merging first array 
for (i = 0; i < array1Lenght; i++) {
    mergedArray[mergedArray.length] = array1[i];
}

// mergin second array
for (i = 0; i < array2Length; i++) {
    mergedArray[mergedArray.length] = array2[i];
}

//sort the array 
for (i = 0; i < mergedArray.length; i++) {
    for (j = i + 1; j < mergedArray.length; j++) {
        if (mergedArray[i] > mergedArray[j]) {
            temp = mergedArray[j];
            mergedArray[j] = mergedArray[i];
            mergedArray[i] = temp
        }
    }
}

var mergedArrayLenght = mergedArray.length;


//sum should be 50 and contain maximum elemets.
for (i = 0; i < mergedArrayLenght; i++) {
    sum = sum + mergedArray[i]
    if(sum <= 50){
        outputArray[outputArray.length] = mergedArray[i]
    }
}


console.log(outputArray)