// let name = [1, 1, 2, 2, 4, 3, 5, 5, 6, 7, 8, 9, 9, 5, 4, 9, 10];
var name = ["Mike","Matt","Matt","Nancy","Adam","Jenny","Jenny","Nancy","Carl"];

let uniqName = [];

for (let i = 0; i < name.length; i++){
    let element = name[i];
    let index = uniqName.indexOf(element);
    if (index == -1) {
        uniqName.push(element)
    }

}
console.log(uniqName);
