// by expression function 

let sid=function fun(){
    console.log("this is a simple expression function")
}
sid();
// --------------------------------------------------------------

// anonaymous function (without function name)

let anonaymous=function(){
console.log("this is anonaymous function without function name")
}
anonaymous();
// --------------------------------------------------------------------------

// arrow function => fat arrow
// do not need function keyword;
// do not need function name;
// only need a fat arrow; =>

// 1-st way 
let arrowFunction=()=>{
    console.log("this is a arrow function => ")
}
arrowFunction();

// -------------------------------------------------------------------

// 2-nd way = single line arrow function
let singleArrow=()=>console.log("this is a single arrow function");
singleArrow();

// ---------------------------------------------------------------------------------------

// 3-rd way = multiple line arrow function 

let returnFunction=(a,b)=>{
    return a*b;
}
returnFunction(10,9);
console.log(returnFunction(10,9));





