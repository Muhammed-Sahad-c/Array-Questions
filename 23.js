// move all zero to first of the array

var array = [1,2,3,4,0,0,2,0];

var resultArray = [];

var length = array.length;

// method 1

// // inserting all zeros
// for(i=0;i<length;i++){
//     if(array[i] === 0){
//         resultArray[resultArray.length] = array[i];
//     }
// }

// /// inserting other numbers
// for(i=0;i<length;i++){
//     if(array[i] !== 0){
//         resultArray[resultArray.length] = array[i]
//     }
// }



// method 2
for (let i of array){
    if(i ===0) resultArray.unshift(i);
    else resultArray.push(i)
}

console.log(resultArray)