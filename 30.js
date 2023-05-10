// move all zeros to first of the array 


var array = [1,0,2,0,3,0,9,0];
var output=[];

for(i of array) {
    if(i !== 0) output.push(i);
    else output.unshift(i)
}

console.log(output)