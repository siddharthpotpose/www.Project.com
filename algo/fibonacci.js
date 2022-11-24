// fibonacci 
let firstNumber=0;
let secondNumber=1;
let nextNumber=0;
function fibonacci(n){
for(let i=0;i<=n;i++){
    console.log(firstNumber)
    nextNumber=firstNumber+secondNumber;

    firstNumber=secondNumber;
    secondNumber=nextNumber;
      
}
}
fibonacci(7)

// -----------------------------------------------------------------

function fun(a){
let firstNum=0;
let secondNum=1;
let nextNum=0;
for(n=0;n<=a.length-1;n++){

    firstNum=secondNum;
    secondNum=nextNum;
    nextNum=firstNum;
    console.log(firstNum)

}
} 
fun(9);