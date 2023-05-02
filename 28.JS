/// given an array of strings sort it in alphabeticall order

var arr = ['Stay', 'Cold Play', 'Without me', 'Superman', 'As it was'];

var temp, len = arr.length, ip;

for (i = 0; i < len; i++) {
    ip = i;
    for (j = i + 1; j < len; j++) {
        if (arr[i].localeCompare(arr[j]) > 0) ip = j;
    }
    temp = arr[i];
    arr[i] = arr[ip];
    arr[ip] = temp;
}

console.log(arr)