// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,17,3)
let myCreatedDate = new Date("01-14-2023")
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //answer in millisecond from reference 1 Jan 1970
console.log(myCreatedDate.getTime());  //reference froom the taken date to current current date
console.log(Math.floor(Date.now()/100));  //in seceond


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
})












