const course = {
    coursename : "JavaScript",
    price:"999",
    courseInstructor : "Hitesh"
}
// const {courseInstructor} = course
//console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

const navbar = ({company}) => {

}
navbar(company = "hitesh")

