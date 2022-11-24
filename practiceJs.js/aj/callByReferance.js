// call by referance = it means all non primative data type passed in the parameter 
// its called call by referance

function fun(obj){
    console.log("calll by referance",obj)
}
let obj={
    name:"sid",
    mo:8485896373,
    eId:"sid@gmail.com"
}
fun(obj)
// ----------------------------------------------------------

function fun(array){
    console.log("calll by referance",array)
}
let array=[10,20,30,true]
fun(array)