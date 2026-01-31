// function addTWo(n1,n2) {
//     return n1+n2
// }
// const result = addTWo(3,5)
// console.log("Result: ",result);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return     
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function CalculatecartPrices(...num1) {
    return num1
}
console.log(CalculatecartPrices(100,200,300));

const user = {
    username: "Ravikant",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);   
}
handleObject(user)
handleObject({
    username:"Rjksak",
    price: 120
})







