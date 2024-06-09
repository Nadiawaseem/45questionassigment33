var number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var i = 0; i < number.length; i++) {
    var numbers = number[i];
    var ordinalEnding = void 0;
    if (numbers === 1) {
        var ordinalEnding_1 = "st";
    }
    else if (numbers === 2) {
        ordinalEnding = "nd";
    }
    else if (numbers === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log('${numbers}${ordinalEnding}');
}
