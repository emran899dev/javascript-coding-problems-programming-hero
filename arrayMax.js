let studentRoll = [100, 2, 3, 4, 5, 230, 24, 35, 45, 67, 87, 89, 12, 23, 34, 45, 67]

let max = 0
for (let i = 0; i < studentRoll.length; i++){
    let element = studentRoll[i];
    if (element > max) {
        max = element
    }
}
console.log(' Highet value ', max);

// const result = Math.max(...studentRoll)
// console.log(result);