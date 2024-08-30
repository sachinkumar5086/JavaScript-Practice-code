//   forEach loop

const coding = ["python","java","Ruby","CPP"]
coding.forEach(function (val) {
    // console.log(val)
});

coding.forEach((items) => {
    // console.log(items)
})


function printMe(item){
    //console.log(item)
}
coding.forEach(printMe)

coding.forEach((item,index,arr) => {
   // console.log(item,index,arr)
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((val) => {
    console.log(val.languageName)
})
