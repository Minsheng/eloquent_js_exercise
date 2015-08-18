"use strict";
/*
 * Takes an element and a list and
 * creates a new list that adds the element to the front of the input list
 * */
var prepend = function(ele, list) {
    return {value: ele, rest: list};
};

/*
* Convert an array to a list such that
* [1,2,3] => {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
* */
var arrayToList = function(arrayVal) {
    if (arrayVal.length == 0) {
        return {};
    }

    var lastIndex = arrayVal.length-1;
    var rest = prepend(arrayVal[lastIndex], null);

    while (lastIndex != 0) {
        lastIndex--;
        rest = prepend(arrayVal[lastIndex], rest);
    }

    return rest;
};

/*
 * Convert a list to an array such that
 * {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}} => [1,2,3]
 * */
var listToArray = function(listVal) {
    var result = [];
    if (listVal == {}) {
        return result;
    }

    result.push(listVal.value);
    var restList = listVal.rest;

    while (restList != null) {
        result.push(restList.value);
        restList = restList.rest;
    }

    return result;
};

/*
* Takes a list and a number and returns the element
* at the given position in the list, or undefined when there is no such element
* */
var nth = function(list, index) {
    if (index == 0) {
        return list.value;
    }

    if (list.rest == null) {
        return undefined;
    }

    return nth(list.rest, index-1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20