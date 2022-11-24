// closure = parsiste [save] its , state[ existing value or particular action  ] storess outer scope
// closure provide to access the outer scope of function
// from inside the inner function 
// even after the outer function has closed.




let x;
function fun(){
    x=20;
    function one(){
        x=x+50;
        console.log(x)
    }
    one();
}
fun();
console.log("after execution = ",x) 

// ------------------------------------

let z;
function fundu() {
        z=20;
        let y=10;
      function fun2() {
            z = y + 10;
          
        } fun2();
       

}
fundu();
console.log("afther exection = ", z) 

// ------------------------------------------------------------




let a;
function sidu(){
    a=80;
    function simu(){
        a=a+10;
        console.log(a)
    }
    simu();
}
sidu();
console.log("after execution = ", a)

// --------------------------------------------------------
