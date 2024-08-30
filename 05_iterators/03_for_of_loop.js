// for of loop

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`the char is ${greet}`)
}

// Map
const myMap = new Map()
myMap.set('IN','India')
myMap.set('USA','United States Of America')
myMap.set('FR','France')
for (const [key,value] of myMap) {
console.log(`${key} stands for ${value}`)  
}
