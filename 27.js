// move all zerots to end of the array

var array = [1,3,0,2,0,3,2,7,0,9,0];

var length = array.length;

var temp ;

for(i=0;i<length;i++){
    for(j=i+1;j<length;j++){
        if(array[j] !== 0 && array[i] === 0){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}


console.log(array)