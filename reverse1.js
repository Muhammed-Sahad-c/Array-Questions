//reverse an array with new array

 
var array = [1, 2, 3, 4, 5];
let temp;
let reveredArray = [];
let length = array.length;
let j = 0;

 
for (i = length - 1; i >= 0; i--) {
    reveredArray[j] = array[i]
    j++;
}


console.log(reveredArray)