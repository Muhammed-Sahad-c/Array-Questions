// insert values in nth position.

var array = [10, 20, 30, 40, 50]
var length = array.length;

var position = 2;
position -= 1

// changing position 
for (i = length; i >= position; i--) {
    array[i+1] = array[i]
}

array[position] = 'new value'



for(i=0;i<length;i++){
    console.log(array[i])
}