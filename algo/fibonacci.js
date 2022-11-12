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