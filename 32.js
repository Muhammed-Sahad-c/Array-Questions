// The function should return true if every value in the array has it's corresponding value squared in the second array.
//     The frequency of values must be the same


var arr1 = [1, 2, 3];
var arr2 = [1, 4, 9, 10];




for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
        if (arr1[i] * arr1[i] === arr2[j]) arr2.splice(j, 1)
    }
}


console.log(arr2.length === 0)