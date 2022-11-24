// call back function  

function main(a,b,fun){
fun(a,b);

}
main(100,10,mul)

function addition(a,b){
    console.log(a+b)
}
function mul(a,b){
    console.log(a*b)
}