//  filter
const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((myNums) => myNums > 5)
// console.log(newNums);


// let myNewNums = myNums.filter((item)=> {
//     return item > 5
// })
// console.log(myNewNums)


const NewNumArr = []
myNums.forEach((number) => {
    if (number > 5) {
        NewNumArr.push(number)
    }
})
// console.log(NewNumArr);

//////////////////////////////////////////////////////////////

const books = [
    { title: 'book One' , genre: 'Fiction' , publish: 1981 , edition: 2004 },
    { title: 'book Two' , genre: 'Non-Fiction' , publish: 1985 , edition: 2004 },
    { title: 'book Three' , genre: 'History' , publish: 1991 , edition: 2004 },
    { title: 'book Four' , genre: 'Science' , publish: 2006 , edition: 2004 },
    { title: 'book Five' , genre: 'Fiction' , publish: 1992 , edition: 2004 },
    { title: 'book Six' , genre: 'General Knowledge' , publish: 2000 , edition: 2004 },
    { title: 'book Seven' , genre: 'Fiction' , publish: 1998 , edition: 2004 },
    { title: 'book Eight' , genre: 'Fiction' , publish: 1988 , edition: 2004 },
    { title: 'book Nine' , genre: 'Fiction' , publish: 2006 , edition: 2004 },
    { title: 'book Ten' , genre: 'Fiction' , publish: 2003 , edition: 2004 },
]

let mybooks = books.filter( (bk) => bk.genre === "Fiction" && bk.publish <= 2000)
console.log(mybooks);
