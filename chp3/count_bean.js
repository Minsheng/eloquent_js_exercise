var countBs = function(bean) {
    return countChar(bean, "B");
};

var countChar = function(word, key) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == key) {
            count++;
        }
    }
    return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4