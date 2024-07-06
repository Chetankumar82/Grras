// Write a JS program to check whether the triangle is equilateral, isosceles or scalene triangle.
let a = 10;
let b= 10;
let c= 10;
if (a === b && b === c) {
    console.log("Equilateral triangle") ;
} else if (a === b || a === c || b === c) {
   console.log("Isosceles triangle") ;
} else {
    console.log("Scalene triangle") ;
}