//singleton
// Object.create

//object literals
const mysymbol= Symbol("key1")

const JsUser = {
    name: "sachin",
    "full name": "Sachin Kumar Yadav",
    [mysymbol]: "mykey1",
    age: 21,
    location: "Lucknow",
    email: "sachin@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysymbol])

// JsUser.email = "sachin@google.com"
// Object.freeze(JsUser)
// JsUser.email = "sachin@chatgpt.com"

// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
