// function reverseString(str) {
//     let revers = '';
//     for (let i = 0; i < str.length; i++){
//         let cahr = str[i]
//         revers =  cahr + revers 
//     }
//     return revers;
// }

function reverseString(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
var speech = "Lorem ipsum    dolor sit amet   consectetur adipisicing elit. Beatae, ab?";
console.log(reverseString(speech));