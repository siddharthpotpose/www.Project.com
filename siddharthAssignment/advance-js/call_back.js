// call back function 

function fun(x){
x()
}
let m=90;
// fun(90);
// fun(m);
fun(addition)

function addition(){
    console.log("this is a call back function")
}

// ---------------------------------------------------------------------

// example 2

function calculator(a,b,myFun){
myFun(a,b)
}
// calculator(10,7,multiplication);   //ans=70;
// calculator(10,7,division)     //ans=1.4285714285714286;
calculator(10,7,substraction)    // ans=3;

function multiplication(y,z){

    console.log("multiplication of  "+"10 * 7 = ",y*z)

}

function division (c,d){
    console.log("division of 10/7 = ",c/d)
}

function substraction (a,b){
    console.log("substraction of 10 - 7 = ",a-b)
}