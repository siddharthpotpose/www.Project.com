function prime(n){
let item=0;
for(i=2;i<n;i++){
    if(n%i===0){
       item++
    }
    if(item>0){
        console.log("it is a not prime number")
    }
    else{
        console.log("it is prime number = "+n)
    }

}
}
prime(31);