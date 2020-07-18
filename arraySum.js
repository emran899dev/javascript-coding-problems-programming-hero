// let studentRoll = [100, 2, 3, 4, 5, 230, 24, 35, 45, 67, 87, 89, 12, 23, 34, 45, 67]

// let sum = 0
// for (let i = 0; i < studentRoll.length; i++){
//     let element = studentRoll[i];
//     sum = sum + element
// }
// console.log('Sum value ', sum);

let studentRoll = [100, 2000, 3, 4, 5, 230, 24, 35, 45, 67, 87, 89, 12, 23, 34, 45, 67]
let studentRoll1 = [45, 67, 87, 89, 12, 23, 34, 45, 67]

function higerRoll(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++){
    let element = num[i];
    sum = sum + element
    }
    return sum;
}
console.log(higerRoll(studentRoll));
console.log(higerRoll(studentRoll1));

// var array = [1, 2, 3];
// let sum = 0;

// for (var i = 0; i < array.length; sum += array[i++]);
// console.log(sum);

// var array = [1, 2, 3, 4, 5];
// // Getting sum of numbers.
// var sum = array. reduce(function(a, b){
// return a + b;
// }, 0);
// console. log(sum); // Prints: 15.

