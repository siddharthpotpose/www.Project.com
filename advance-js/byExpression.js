// advance javascript 
// there are different type of expression 
//  1. By expression 
//  2. call back function
//  3. higher order function 
//  4. immidiate invoked function expression (iife)
//  5. rest parameter
//  6. spread operator
// ------------------------------------------------------

// 1. first type of adcance javascipt function is by expression there are some type 
// a. by expression
// b. anannoymus function 
//  c. arrow function 
// -----------------------------------------------------

// function fun(){
// console.log("this is a basic simple function syntax")
// }                       
// fun();

let k=function fun(){
    console.log("this is a expression javascript function");  //this is a by expression function [k=] store function in variable
}
k();
// -------------------------------------------------------------------------------

// b.anannoymus function 

let s=function (){
console.log("this is a anannoymus function. if we are not giving a <br> function name in function it is a anannoymus function. without name function");
}
s();
// -------------------------------------------------------------------------------------------------

// c. arrow function = we are using Fat Arrow => this is a fat arrow. =>
// there is not need to write function keyword,
//  also there is not to need a function name,
// only need to write fat arrow =>
let sid= (a,b)=> {
    console.log("this is a arrow function")
   
}
sid();
// --------------------------------------------------------------------------------------


// by expression 
 let simu= function simi(){
    console.log("this is a simple by expression function function")
  }
  simu();



