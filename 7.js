// sort in ascending order

var array = [12, 23, 1, 3, 34, 32, 4];
var length = array.length;
var temp;


for(i=0;i<length;i++){
    for(j=i+1;j<length;j++){
        if(array[i]>array[j]){
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log(`ascending order ${array}`)