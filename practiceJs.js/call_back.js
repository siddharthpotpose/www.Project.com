// call back function = 1st way

function fun(a,b){
addition(a,b)
}
fun(10,10);
function addition (x,y){
    console.log("addition of two number x + y = ",x+y);
}
// ------------------------------------------------------------------------

function callBack(a,b,back){
back(a,b)
}
callBack(50,10,substraction,);
callBack(100,10,division)

function division(x,y){
    console.log("division of two number x / y = ",x/y)
}

function multiplication(x,y){
    console.log("multiplication of x * y = ",x*y)
}

function substraction(x,y){
    console.log("substraction of two number x - y = " , x-y)
}

// ------------------------------------------------------------------------------


