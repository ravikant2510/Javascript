// const user = {
//     username : "Ravi",
//     price : 999,
   
//     welcomeMessage: function() {
//         console.log(`${this.username}, Welcome to Website`);
//         console.log(this);    
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// (this) can be used inside "Object" not in "function" , if we use inside function then it shows "undefined"


// function chai() {
//     console.log(this);
//     console.log(this.username);
    
// }

// chai()



// const chai = () => {
//     console.log(this);
//     console.log(this.username);
    
// }

// chai()

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// Alternate method

const addThree = (num1, num2,num3) => (num1+num2+num3)
console.log(addThree(1,2,3));

const name = (num1,num2) => ({username: "Ravi"})
console.log(name());




