const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const NewNums = myNumbers.map((nums) => nums +10 )

const NewNums = myNumbers
                .map( (nums) =>nums * 10 )
                .map( (nums) => nums + 2)
                .filter( (Number) => Number >= 40 )
console.log(NewNums);
