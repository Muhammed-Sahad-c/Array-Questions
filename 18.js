//  copy the elements of one array into another array

var array = [1, 2, 3, 4, 5];

var copyOfTheArray = []

var copyLength

var length = array.length;

for(i=0;i<length;i++){
    copyLength= copyOfTheArray.length;
    copyOfTheArray[copyLength] = array[i];
}


console.log(`copy of the array ${copyOfTheArray}`)