// largest repeating element and count.

var array = [0, 2, 3, 3, 0, 0, 1,1,1,1];
var temp;
var length = array.length;
var count;
var largestCount = {
    value:0,
    count:0
}


for (i = 0; i < length; i++) {
    count =0
    for(j=0;j<length;j++){
        if(array[i]==array[j]){
            count++;
        }
    }

    if(count > largestCount.count ){
        largestCount.value = array[i];
        largestCount.count = count;
    }
}


console.log(`largest repeating number is ${largestCount.value} it repeating ${largestCount.count} times.`)