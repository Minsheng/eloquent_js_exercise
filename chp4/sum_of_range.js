/*
* Takes two arguments, start and end,
* and returns an array containing all the numbers from start up to (and including) end
* */
var range = function(start, end, step) {
    if (step === undefined) {
        step = 1;
    }

    var arr = [];

    if (start == end) {
        return arr;
    } else if ((start < end) && (step > 0)) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
        return arr;
    } else if ((start > end) && (step < 0)) {
        for (var j = start; j >= end; j += step) {
            arr.push(j);
        }
        return arr;
    } else {
        return arr;
    }
};

var sum = function(num_list) {
    var sum = 0;
    for (var i = 0; i < num_list.length; i++) {
        sum += num_list[i];
    }
    return sum;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]