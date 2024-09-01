//////////////// reduce()
const myNum = [1,2,3,4]

// const myTotal = myNum.reduce( function(acc, currVal){
//     console.log(`acc ${acc} and currVAl ${currVal}`)
//     return acc + currVal
// },0)

const myTotalVal = myNum.reduce( (acc,currVal) => acc + currVal, 0)
// console.log(myTotalVal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 1999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Web Development course",
        price: 2999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(priceToPay);
