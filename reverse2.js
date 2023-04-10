//array reverse without using new array
 
var array = [1, 2, 3, 4, 5];
var length = array.length;
var temp;
var j =0;

for(i=length-1;i>=length/2;i--){
    if(j<=length/2){
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        j++;
    }
}

console.log(array)