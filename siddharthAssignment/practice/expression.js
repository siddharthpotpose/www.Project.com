let s=function fun(){
console.log("this is a simple expression function")
}
s();
// -----------------------------------------------------------------

// anonymous function 
let sid=function(){
console.log("there is no need for function name is called as a anonymous function")
}
sid();
// ------------------------------------------------------------------------------

// arrow function 
// simple arrow function 
let a=()=>{
    console.log("this is a simple arrow function")
}
a();
// ----------------------------------------------------------------------

// single line arrow function 
let b=()=>console.log("this is a single line arrow function")
b();
// ---------------------------------------------------------------------------

//multiline arrow function 
let c=(x,y)=>{
    return x*y ;
}
c(100,3)
console.log("this is a multiline arrow function",c(100,3))
// -----------------------------------------------------------------------------------