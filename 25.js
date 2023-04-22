// find the two numbers which has 10 as sum.

var array = [2,3,4,8,9,10];

var length = array.length;

for(i=0;i<length;i++){
    for(j=i+1;j<length;j++){
        if(array[i]+array[j]== 10){
            console.log(array[i],array[j])
            break;
        }
    }
}