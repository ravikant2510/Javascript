const tinderUser  = new Object();
 tinderUser.id = "123abc"
 tinderUser.name = "Samuel"
 tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Ravikant",
            lastName : "Purbey"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1,obj2}
console.log(obj4);

const obj5 = Object.assign({} ,obj1, obj2, obj3)
console.log(obj5);

//  other method
const ob = {...obj1,...obj2}
console.log(ob);

const user = [
       {
    id : 1,
    email: "jdjkal@gmail.com"
       },
       {
    id : 2,
    email: "jdjkawkefasll@gmail.com"
       },
       {
    id : 3,
    email: "jdjkslakal@gmail.com"
       },
]
console.log(user[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));









