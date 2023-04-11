// count the duplicate elements in the array 

const array = [1, 2, 3, 4, 5, 5, 1, 1];
const length = array.length;

var count;

var checkedArray = []
var checkedArrayLength;

for (i = 0; i < length; i++) {
    count=0
    for (j = 0; j < length; j++) {
        if(array[i] === array[j] && checkedArray.indexOf(array[i])=== -1){
            count++;
        }
    }

    if(count >1 ){
        checkedArray[checkedArray.length] = array[i]
        console.log(` ${array[i]} is occurred ${count} times.`)
    }

}

