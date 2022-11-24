// higher order function 

function  fun(){
    return function(){
        console.log("this is a higher order function")
    }
}
// fun()();
let store=fun();
store()
// console.log(store)
