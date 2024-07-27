// function calculateCartPrice(num1){
//     return num1
// }

function calculateCartPrice(...num1){
    return num1
}
let totalPrice=calculateCartPrice(200,400,254,356)
// console.log(totalPrice);

const user={
    username: "Sachin",
    age: 21,
    price: 300
}

function handleObject(anyObject){
    return (`The user is ${anyObject.username} and price is ${anyObject.price}`)
}

let value=handleObject(user)
// console.log(value)


function valueOfArray(anyArray){
    return (`the value at second index is ${anyArray[1]} `)
}

let myarr=[344,554,768,345]
console.log(valueOfArray(myarr));



