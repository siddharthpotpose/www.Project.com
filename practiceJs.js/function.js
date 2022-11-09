// function  simple function

function fun(){
    console.log("hello world")

}
fun()
fun()
// -----------------------------------------------
// parameter/argument function 
function sid(name){
 console.log("welcome "+name)                        //parameter/argument function
}
sid(07);
sid(03);
// ----------------------------------------
function functionName(sid)
{
    console.log("hello "+sid)
}
functionName(03);
functionName(07)         //   its called a parameter/argument function 
// ----------------------------------------------
function arpan(name){
    console.log("arpan"+name)
}
arpan(14);
// =========================================
function indu(arpan){
    console.log("indu son ="+arpan)            //it is a argument function
}
indu(03)
// -----------------------------------------------
function siddhu(indu)
{
    console.log("indus son ="+indu)
}
siddhu(03);
// ------------------------------------------
function fun2(num11,num12){
    return num11+num12;                 //its called return Function
}
let ans=fun2(33,11)
console.log(ans)
// -----------------------------------------------------

// prompt parametarised
let a=prompt("enter a value ")
let b=prompt("enter value for multiplication ")

function fun3(a,b){
    let d=a*b
    console.log("multiplication of a+b+c = "+d)
}fun3(a,b)
alert("thank you")
