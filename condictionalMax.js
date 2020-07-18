let business = 850;
let minister = 700;
let sochib = 700;

if (business > minister && business > sochib) {
    console.log('Bigger is Business ' + business);
} else if (minister > business && minister > sochib) {
    console.log('Bigger is minister ' + minister);
    
}else {
 console.log('Bigger is sochib ' + sochib);   
}

// const bigger = Math.max(business, minister, sochib);
// console.log(bigger);

/** 
if (business > minister) {
    if (business > sochib) {
        console.log('Business is bigger');
    } else {
        console.log('Sochib is bigger');
    }

} else {
    if (minister > sochib) {
        console.log('Minister is bigger');
    } else {
        console.log('Sochib is bigger');
    }

}
*/