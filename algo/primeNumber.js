
function primeNumber(num){
let item=0;
for(i=2;i<num;i++){
    if(num%i==0){
      item++;
    }
}
if(item>0){
    console.log(num+ " = it is not prime number")
}
else {
    console.log(num +" = it is prime number")
}
}
primeNumber(37)


