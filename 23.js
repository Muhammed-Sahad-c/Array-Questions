// move all zero to first of the array

var array = [1,2,3,4,0,0,2,0];

var resultArray = [];

var length = array.length;


// inserting all zeros
for(i=0;i<length;i++){
    if(array[i] === 0){
        resultArray[resultArray.length] = array[i];
    }
}

/// inserting other numbers
for(i=0;i<length;i++){
    if(array[i] !== 0){
        resultArray[resultArray.length] = array[i]
    }
}


console.log(resultArray)


// method 2 using inbuilt methods

var array = [1,2,3,4,0,0,2,0];

for(let i=0;i<array.length;i++){
    if(array[i]==0){
         array.unshift(array.splice(i,1)[0])
    }
}

console.log(array)
