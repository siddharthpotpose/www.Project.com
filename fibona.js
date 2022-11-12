// function fibo(n){
//     let first=0;
//     let second=1;
//     let next=0;
//     for(let i=0;i<=n;i++){
//         console.log(first)
//         next=first+second;
//         first=second;
//         second=next;
        
        
//     }
// }
// fibo(7)
// --------------------------------------------------------------------


function prime(number){
    for(let i=2;i<=14;i++){
        
        if(number % i === 0){
            return false
        }
    }
    return true
}
prime(15)