// fum of the array elements.

const array = [1,2,3,4,5,6];
var total = 0;
var length= array.length

for(i=0;i<length;i++){
    total += array[i];
}


console.log(`sum of the array elements ${total}`);