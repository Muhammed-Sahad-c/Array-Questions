// move all zero to first of the array

var array = [1,2,3,4,0,0,2,0];

// -------------------------------------------------------------------

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


// -------------------------------------------------------------------

// method 2 using in-built methods

for(let i=0;i<array.length;i++){
    if(array[i]==0){
         array.unshift(array.splice(i,1)[0])
    }
}


// -------------------------------------------------------------------


// method 3 O(N)T   O(1)S
const output = [];

for(let i=0;i<array.length;i++){
    if(array[i] !== 0) {
        output.push(array[i])
    }else{
         output.unshift(0)
    }
}

 // -------------------------------------------------------------------
