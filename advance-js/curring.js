// curring = we can separate argument function.
// and call it together

function fun(a){
    return function (b){
return a+b;
    }
}
let ans=fun(10)(40);
console.log(ans)
// let result=ans(20);
// console.log(result)

// -------------------------------------------------

function fundu(fun){
    return function(key){
        return fun[key]
    }
}
let emp={
    name:'sid',
    salary:79000,
    deg:'dev'
}
let store=fundu(emp)('deg')
console.log(store)

