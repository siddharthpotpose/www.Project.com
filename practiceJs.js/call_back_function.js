
function calculate(a,b,fun){
fun(a,b)

}
function sub(c,d){
    console.log("substarction of two number = ",c-d)
}
function mul(s,p){
    console.log("multiplication of two number = ",s*p )
}
function div(as,ap){
    console.log("division of two number = ",as/ap)
}
function reminder(ap,pa){
    console.log("reminder of two number = ",ap%pa)
}


function addition(x,y){
console.log("addition of two number = ",x+y)
}
calculate(10,3,div)
