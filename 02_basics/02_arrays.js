const marvel_heroses = ["Thor","Spiderman","Ironman"]
const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroses.push(dc_heroes)
// console.log(marvel_heroses)

// const all_heroes = marvel_heroses.concat(dc_heroes)
// console.log(all_heroes)

const all_heroes = [...marvel_heroses,...dc_heroes]
// console.log(all_heroes)

const another_array = [4,5,2,6,[4,6,7,5],5,9,[9,0,6,[5,3,6
]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Sachin"))
console.log(Array.from("Sachin"))
console.log(Array.from({name: "sachin"})); //interesting topic

let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3))