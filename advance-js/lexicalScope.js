// lexical scope = it means child function scope allow to access parents scope
// its called lexical scope

let x=10;
function fun(){
    let a=20;
    function fun2(){
        let b=30;
        function fun3(){
            let c=40;
            console.log(x+a+b+c)
        }fun3();
        
    }fun2();
}fun();

// ------------------------------------------------------------

let y=100;
function p(){
    let q=50;
    function r(){
        let s=50;
        function t(){
            let u=50;
            console.log(y+q+s+u)
        }
        t()
    }r()
}p()