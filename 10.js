// find odd numbers

var array = [1,2,3,4,5,6,7,8];
var oddNumbers = [];
var evenNumbers = [];
var length = array.length;

for(i=0;i<length;i++){
    if(array[i] %2 == 0){
        evenNumbers[evenNumbers.length] = array[i];
    }else{
        oddNumbers[oddNumbers.length] = array[i];
    }
}

console.log(`odd numbers : ${oddNumbers}`)
console.log(`even numbers : ${evenNumbers}`)