// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sachin"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "sachin@gmail.com",
    FullName: {
        userFullName: {
            firstName: "Sachin",
            lastName: "Yadav"
        }
    }
}

console.log(regularUser.FullName.userFullName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4= Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

// console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))