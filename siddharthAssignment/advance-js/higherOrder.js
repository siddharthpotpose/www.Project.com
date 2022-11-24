// higher order function = is when function return another function is called higher order function

function fun(){
    console.log("this is a example of higher order function")
    return function funss(){
        
        console.log("this is a simple function under another function is called as higher order function")
    }
}
let a=fun()();
// a();
// console.log(a)