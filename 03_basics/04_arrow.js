const user ={
    username : "Sachin",
    price : 444,
    WelcomeMessage: function(){
        console.log(this.username)
    }
}
// user.WelcomeMessage()
// user.username = "Arpit"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
    
//     console.log(this);
// }

// chai()

// const chai = function(){
//     console.log(this);
// }
// chai()

const chai = () => { 
    // let username = "sachin"
    console.log(this);   
}
// chai()


// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(4,5));

const userDetails = () => ({username: "sachin" , price : 34 })

console.log(userDetails());