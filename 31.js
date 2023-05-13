// find the product of the array ,
// return 1 if the product greater than 0,
// return -1 if the product less than 0,
// return 0 if the product is zero.

var arr = [1, 3, 4,];

var product = arr[0];

for (i = 1; i < arr.length; i++) {
    product = product * arr[i]
}



if (product > 0) return 1;
else if (product == 0) return 0;
else return -1;
