
const temperature = 45

if (temperature<=25) {
    console.log(`temperature is than 25 degree`);
}
else{
    console.log("temperature is greater than 25");
}



const userEmail = []

if (userEmail.length === 0) {
    console.log("Empty array")
}

const myObject = {}

if (Object.keys(myObject).length === 0) {
    console.log("empty Object")    
}


// Nullish coalescing operator : Null, Undefined
let val1;
val1 = 5 ?? 10

val2 = null ?? 10
console.log(val2)

val3 = undefined ?? 15
console.log(val3);

val4 = null ?? 10 ?? 15
console.log(val4)

// Terniary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")