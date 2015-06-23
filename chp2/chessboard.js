//var size = 8;
//var sym1 = " ";
//var sym2 = "#";
//var output = "";
//for (var i = 0; i < size; i++) {
//    if (i % 2 == 0) {
//        for (var j = 0; j < size; j++) {
//            if (j % 2 == 0) {
//                output += sym1;
//            } else {
//                output += sym2;
//            }
//        }
//    } else {
//        for (var j = 0; j < size; j++) {
//            if (j % 2 == 0) {
//                output += sym2;
//            } else {
//                output += sym1;
//            }
//        }
//    }
//    console.log(output);
//    output = "";
//}

var size = 8;
var board = "";

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);