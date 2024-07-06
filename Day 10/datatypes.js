/*
    The specific type of data stored inside any variable is known as datatype.

    There are 2 types of datatypes:
        1. Primitive (one variable one value):
            i. INT (numbers) [number]
            ii. FLOAT (decimal) [number]
            iii. strings (words, sentences) [String | object]
            iv. boolean (true or false) [boolean]
        2. Non-primitive (one variable many value)
            i. Object:
                a. [] -> arrays
                b. {} -> JSON
*/

// Primitive Datatypes:

// let integer = 10
// console.log(integer, typeof(integer))
// let float = 10.5
// console.log(float, typeof(float))
// let str = 'Hriday'
// console.log(str, typeof(str))
// let bool = true
// console.log(bool, typeof(bool))

// Typecasting -> Going from one datatype to another
// let x = 10
// console.log(x, typeof(x))
// x = String(x)
// console.log(x, typeof(x))
// x = Boolean(x)
// console.log(x, typeof(x))



// Non-primitive datatypes:
// OBJECT -> arrays & object

// let arr = [1,2,3,4,5,6, "Hriday", 10.56, true, false]
// console.log(arr[index]) index | start = 0 and end = arr.length-1
// console.log(arr[arr.length - 1])
// console.log(arr[4])

// let arr2d = [[1,2,3,4,5], [6,7,8,9,10]]
// console.log(arr2d[0][0])


// Object
let obj = {
    "key":"value",
    "int":10,
    "float":10.5,
    "string":"Hriday",
    "bool":true,
    "arr": [1,2,3,4],
    "obj":{
        "hi":"hello"
    }
}

// console.log(obj['obj']['hi'])
console.log(obj['arr'][0])