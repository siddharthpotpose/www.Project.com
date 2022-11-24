// higher order = when function return another function

function fun(){
    console.log("this is a higher order function")
return function (){
    console.log("this is a anonymous function without name ")
}
}
// let result=fun();
fun()();
// result();

// -------------------------------------------------------------------------------
function funs(){
return function fundu(){
    console.log("this is second function ")
}
}
let s=funs()();
// console.log(s);
// s();