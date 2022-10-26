var lower = 2;
var upper = 15;
var array = [1, 4, 7, 9, 12];
var between = array.filter(function (item) {
    return (item > lower && item < upper);
});

console.log(between)