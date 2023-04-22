var array = [1, 2, 3, 4, 40, 38, 4, 9, 8];

var length = array.length;

var mySet = new Set();

var target = 10;

for (i = 0; i < length; i++) {
    var num = array[i];
    var result = target - num;
    if (mySet.has(result) == false) {
        mySet.add(num);
    } else {
        console.log(num, result);
        break;
    }
}

 