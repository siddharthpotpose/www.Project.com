// lexical scope 

let x=10;
function fun(){
    let a=10;
    function fun1(){
        let b=10;
        function fun2(){
            let c=10;
           function fun3(){
            let d=10;
            console.log(x+a+b+c+d)
           }
           fun3();
        }fun2();
    }fun1()
}fun();
// ----------------------------------------------------

// example 2 

let y=50;
let sid=function(){
    let a=10;
    let akshay=function(){
        let b=10;
        let nagesh=function(){
            let c=10;
            console.log("lexical with ananoymous function = ",y+a+b+c)
        }
        nagesh()
    }
    akshay()
}
sid()
// ------------------------------------------------------------------------

let z=10;
let simi=()=>{
    let a=20;
    let simu=()=>{
        let b=20;
        let siddi=()=>{
            let c=20;
            console.log('this is a lexical with arrow function = ',z+a+b+c)
        }
        siddi();
    }
    simu();
}
simi();