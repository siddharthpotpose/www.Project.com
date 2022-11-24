// call back function 
// 2. second type is call back function of advance javascript
// when we pass function as parameter than 
// it is called as call back function



function calculate(a,b){
addition(a,b)
}
function addition(x,y){
console.log("addition of two number = ", x+y)
}
calculate(10,5)

// -------------------------------------------------------------
function functionName(c,d){
call(c,d)
}
function call(aa,bb){
console.log("addition of number = ",aa+bb)
}
functionName(10,10)

// ---------------------------------------------------------------------------------

function myFun(a){
a()
}
let ans=90;
myFun(print)

function print(){
console.log("hey i am a print function")
}