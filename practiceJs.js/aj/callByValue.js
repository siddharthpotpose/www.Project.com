// call by value = its means all primative data type value passed in parameter is
//  called call by value


function fun(a){
    console.log("this is a simple function = "+a)
}
fun(100); //number
fun("sid") //string
fun(null)  //null
fun(undefined) //undefined
fun(true) //boolean
// ============================================================
//  by expression 
let exp=function fun(a){
    console.log("this is a simple by expression function = "+a)
}
exp(100); //number
exp("sid") //string
exp(null)  //null
exp(undefined) //undefined
exp(true) //boolean
// ----------------------------------------------------------------------
let Anonaymous=function (a){
    console.log("this is a call by Anonaymous function = "+a)
}
Anonaymous(100); //number
Anonaymous("sid") //string
Anonaymous(null)  //null
Anonaymous(undefined) //undefined
Anonaymous(true) //boolean
// ----------------------------------------------------
// arrow function
let arrow= (a)=>{
    console.log("this is a call by arrow function = "+a)
}
arrow(100); //number
arrow("sid") //string
arrow(null)  //null
arrow(undefined) //undefined
arrow(true) //boolean
