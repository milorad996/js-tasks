

var squareItems = function(arr) {
   
    return arr.map(e => e * e)
}

console.log(squareItems([2,3,4]))

let newFunc = (() => {
    return 2 + 2;
})();

console.log(newFunc);


var timesTwo = (number) => number * 2;

console.log(timesTwo(5))

