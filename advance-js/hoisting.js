// hoisting  = means we can used variable or function brfore declaration  
// by defalut js engain move all variable declaration  top of the scope
// variable scope :
// it move declaration only [top]
// javascript only hoists declaration not initialization
// when we used before initialization the default value is undefine
// let n const not allow hoisting until first iys declear let than initialization


// basic scope
// three types of scopes 
// 1. globle scope [var]
// 2. function scope /local scope [let] 
// 3. block level scope [const]

// -----------------------------------------------------
var num = 10;


function fun() {
    let k;
    
    k = 90;
    console.log(k)
    
    {
        var nu = 100;

    }
    console.log(nu)
  
    console.log(num)
   
}
fun();

// ------------------------------------------------------------



fundu();

function fundu(){
    m=130;
 console.log("hello = "+m )
{
     var no=10;
   
}
console.log(no)

var m;

}

// ------------------------------------------------------------------

sid();  //hoisting allow to call function top of the scope

 function sid(){

    y=99;
    console.log(y)
    {
        var x=300;
        
    }
    // let y; // if we are using let and const its cant access
    var y;    // allow to move top     // var is accessable                       // its is declaration
    y=100;        // initialization


    console.log(x)
 }
//  sid() // we can call this in top of the function

