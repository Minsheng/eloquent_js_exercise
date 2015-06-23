//for (var n = 1; n <= 100; n++) {
//    if ((n % 3 == 0) && (n % 5 == 0)) {
//        console.log("FizzBuzz")
//    } else if (n % 3 == 0) {
//        console.log("Fizz");
//    } else if (n % 5 == 0) {
//        console.log("Buzz");
//    } else {
//        console.log(n);
//    }
//}

for (var n = 1; n <= 100; n++) {
    var output = "";

    if ((n % 3 == 0) && (n % 5 == 0)) {
        output = "FizzBuzz";
    } else if (n % 3 == 0) {
        output = "Fizz";
    } else if (n % 5 == 0) {
        output = "Buzz";
    } else {
        output = n;
    }

    console.log(output || n);
}