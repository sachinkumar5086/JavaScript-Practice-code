//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,15)
//let myCreatedDate = new Date(2023,0,15,5,4)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01/20/2034")

// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay()+1)

newDate.toLocaleString("Default",{
    weekday:"long", 
})

console.log(newDate)