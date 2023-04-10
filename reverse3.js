//array reverse without using external variable

var array = [1, 2, 3, 5, 6];
var j=0;
var length = array.length

for(i=length-1;i>=length/2;i--){
    if(j < length/2){
        array[length] = array[i];
        array[i] = array[j];
        array[j] = array[length]
        j++;
    }  
}


 

console.log(array)