/*
* Returns a reversed version of an array
* */
var reverseArray = function(arrayValue) {
    var reversed = [];

    for (var i = arrayValue.length - 1; i >= 0; i--) {
        reversed.push(arrayValue[i]);
    }

    return reversed;
};

/*
* Reverses an array and returns it
* */
var reverseArrayInPlace = function(arrayValue) {
    var len = arrayValue.length;

    for (var i = 0; i < Math.floor(len/2); i++) {
        var first = arrayValue[i];
        arrayValue[i] = arrayValue[len-i-1];
        arrayValue[len-i-1] = first;
    }

    return arrayValue;
};

var singleArray = [1];
var oddArray = [1, 2, 3, 4, 5];
var evenArray = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(singleArray));
console.log(reverseArray(oddArray));
reverseArrayInPlace(singleArray);
reverseArrayInPlace(oddArray);
reverseArrayInPlace(evenArray);
console.log(singleArray);
console.log(oddArray);
console.log(evenArray);