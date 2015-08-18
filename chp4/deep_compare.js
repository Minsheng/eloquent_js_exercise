/*
* takes two values and returns true only if
* they are the same value or are objects with the same properties
* whose values are also equal when compared with a recursive call to deepEqual
* */
var deepEqual = function(x, y) {
    if (x === y) {
        return true;
    }

    if (x == null || typeof x != "object" ||
        y == null || typeof y != "object") {
        return false;
    }

    var xPropCount = 0;
    var yPropCount = 0;

    for (var xProp in x) {
        xPropCount += 1;
    }

    for (var yProp in y) {
        yPropCount += 1;
        if (!(yProp in x) || !deepEqual(x[yProp], y[yProp])) {
            return false;
        }
    }

    return xPropCount == yPropCount;
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true