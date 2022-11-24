// closure = persiste [save ] its state [particular action]
// closure allow to access the outer scope function from inside

let x;
function fun(){
    x=20;
    function fundu(){
        x=x+10;
        console.log(x)
    }
    fundu();
}
fun();
console.log('after execution = ',x)

// -----------------------------------------------------------

let a;
function funny(){
    a=70;
    function funn(){
        a=a+20;
        console.log(a)
    }
    funn()

}
funny()
console.log("after = ", a )
