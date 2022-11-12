// fibonacci = first number 0 , second number 1 , next number = first number 0 + second number 1 = 1 is next number
function fibonacci (n){
let firstNumber=0;
let secondNumber=1;
let nextNumber=0;

if(n<=1){
    console.log("negative fibonacci is not working")
}
for(i=1;i<=n;i++){

    console.log(firstNumber)
    nextNumber=firstNumber+secondNumber;
    
    firstNumber=secondNumber;
    secondNumber=nextNumber;
   
    
}
} 
fibonacci(7)