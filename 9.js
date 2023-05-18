// merge two arrays 

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10, 11];

var length1 = array1.length;
var length2 = array2.length

for (let i = 0; i < length2; i++) {
    array1[length1] = array2[i];
    length1++;
}


console.log(`merged array : ${array1}`)
