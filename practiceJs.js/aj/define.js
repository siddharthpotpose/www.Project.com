// there aree three ways to define function
// 1. call by expression 
// 2. call by anamoymous function 
// 3. call by arrow function [fat arrow =>]
// =================================================

// 1. by expression 
 let store = function fun(){
    console.log("this is a simple by expression function")
 }
 store();
//  -----------------------------------------------------------------
// parameter function 
let variable = function fundu (a,b){
    console.log(a+b)
}
variable(10,10)
// -------------------------------------------------------
// return function

let returnfunction = function retn(a,b){
    return a/b
}
returnfunction(20,5);
console.log(returnfunction(20,5))
// =======================================================================================

// 2. by ananoymous function = without function name

let simAno=function (){
    console.log('this is a simple ananoymous function = without functionName')
}
simAno();
// -----------------------------------------------------------------
// parameter function / argument function 

let paraAno = function (a,b){
    console.log("this is a parametar function with Ananoymous without functionName =" ,a+b)
}
paraAno(10,60)
// ----------------------------------------------------------------------------------------
// return function 
let returnAno = function (a,b){
 return a/b
}
returnAno(100,5)
console.log(returnAno(100,5))
// ===============================================================================
// arrow function  =>
//there is no need for function keyword
// there is no need for functionName
//only need a fat arrow

let Arrow=()=>{
    console.log('simple arrow function')
}
Arrow()
// ----------------------------------------------------
// parametar
let paraArrow=(a,b)=>{
    console.log('argument arrow function = ',a+b)
}
paraArrow(20,30)
// -----------------------------------------------------------
// return
let returnArrow=(a,b)=>{
    return a*b
}
returnArrow(20,3)
console.log(returnArrow(20,3))
