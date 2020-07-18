// let num = 7.499;

// var result = Math.floor(num)
// var result1 = Math.ceil(num)
// var result2 = Math.round(num)

// console.log(result2);

// var dice = Math.random() * 10;
// var dice1 = Math.round(dice)
// console.log(dice1);

// Generating random whole numbers in JavaScript in a specific range

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// var result = getRandomArbitrary(328385, 328440);
// var output = Math.round(result);
// console.log(output);

// Generating random whole numbers in JavaScript in a specific range 5

for (i = 0; i < 5; i++){
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    var result = getRandomArbitrary(328385, 328440);
    var output = Math.round(result);
    console.log(output);
}