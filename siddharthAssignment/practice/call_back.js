function fun(a,b){
addition(a,b)
}
fun(100,30);

function addition(x,y){
    console.log("addition = ",x+y)
}
// --------------------------------------------------------------

function funs(c,d,result){
result(c,d)
}
funs(10,2,multiplication);
funs(100,10,division);
funs(500,250,sub)

function multiplication(p,s){
    console.log("mul = ",p*s )
}
function division(x,y){
    console.log("divison = ",x/y)
}
function sub(x,y){
    console.log("sub = ",x-y )
}