const marvel_heros = ["thor","IronMan","spiderMan"]
const dc_heros= ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_new_heros = marvel_heros.concat(dc_heros)
// console.log(all_new_heros);


const Another_Array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const real_Another_Array = Another_Array.flat(Infinity)
console.log(real_Another_Array);

console.log(Array.isArray("Ravi"));
console.log(Array.from("Ravi"));
console.log(Array.from({name:"Ravi"}));  //key,value , if not given reference then it shows empty Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));








