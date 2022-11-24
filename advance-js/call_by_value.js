// call by value = its means when we pass primitive variable as parameter value,
//  than it is called call by value.
// example :
// let m(20);
// call(m);           = pass all primitive data type 
// -----------------------------------------------------------------------------------

function fun(a){
    console.log("it is a call by value function",a)
}
let result=70;
fun(result);                     //call by value
// fun(90);

// --------------------------------------------------------------

// call by Reference = when we pass non primitive object and array as parameter value,
// than its called by call by referance 
    // let x=[55,77,99];
    // fun(x);

    // --------------------------------------------------------------------------------

    function funs(ans){
        console.log("this is a call by referance function",ans)
    }
    // let ans=[55,77,88,99];       // array
    // funs(ans);
    let ans={
        name:"siddharth",
        rollNO:47,                    // object
        place:"nagpur"
    }
    funs(ans)

    // ---------------------------------------------------------------------------------

