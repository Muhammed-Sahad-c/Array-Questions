// move all zero to end of the array

var array = [1,2,3,4,0,0,2,0];

var resultArray = [];

var length = array.length;

/// inserting other numbers
for(i=0;i<length;i++){
    if(array[i] !== 0){
        resultArray[resultArray.length] = array[i]
    }
}


// inserting all zeros
for(i=0;i<length;i++){
    if(array[i] === 0){
        resultArray[resultArray.length] = array[i];
    }
}

console.log(resultArray)