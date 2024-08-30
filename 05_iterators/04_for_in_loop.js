// for in loop

const myObject = {
    game1 : "PUBG",
    game2 : "Free Fire",
    game3 : "Taken 3"
}
for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`)
}

const programming = ["C","CPP","Python","Java"]
for (const key in programming) {
    console.log(`${programming[key]}`)
}

