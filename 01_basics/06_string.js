let firstname="Sachin"
let lastname="Yadav"
console.log(firstname+ lastname);

console.log(`My first name is ${firstname} and last name is ${lastname}`);

const myname= new String('Sachin yadav')
console.log(myname);
const newString= firstname.substring(0,4)
console.log(newString)

const anotherString=lastname.slice(0,3)
console.log(lastname.length)
console.log(anotherString)

const stringOne= "     Sachin    "
console.log(stringOne)
console.log(stringOne.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))

console.log(url.includes("suraj"))
