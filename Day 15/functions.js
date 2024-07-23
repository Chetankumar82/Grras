/*
    Syntax for functions:

    ! standalone function
    function <function-name>() {
        code
    }

    ! variable defined functions

    1. normal
        let <function-name> = function () {
            code
        }
    
    2. arrow function
        let <function-name> = ()=>{
            code
        }

*/

// standalone function
// function add() {
//     let a = 10, b = 20;
//     console.log(a+b)
// }

// function add(a, b) {
//     console.log(a+b)
// }

// function hello(name) {
//     console.log("Hello", name)
// }

// add(2, 3)
// add(20, 30)
// hello("Hriday")
// hello("Suresh")

// let a = 10

// console.log(a)

// function add_return(a, b) {
//     return a+b
// }

// function add(a,b) {
//     console.log(a+b)
// }

// let op1 = add_return(2,3)
// let op2 = add(2,3)

// console.log(add(2,3))
// console.log(add(20,30))

// console.log(op1)
// console.log(op2)
// console.log(add(2,3))


// let add = function (a, b) {
//     return a+b 
// }

let add = (a, b)=>{
    return a+b 
}

let sum = add

console.log(sum(20, 30))