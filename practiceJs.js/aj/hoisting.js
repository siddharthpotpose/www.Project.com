// hoisting = its means we can used variable or declaration before initialization
// by defaullt javascript engin allow to move declaration top of the scope
// its allow only declartion to move top not a initialization 
// hoisting allow to call function top of the function / starting 
// let and const allow hosting when first declare than initialization 



function fun(){
    
     //  let y;   //js move y declaration by defalut top of the initiazization 
    y=103;
    console.log("this is a main calling y ", y)

    let z; // let allow if declaration and initialization is same time
    z=99; // initialization
    console.log("this is a main calling y ", z)
    
    {
        //let x=100; // let is block level scope not allow to access outer 
        var x=100; //its is functional scope its allow to access the outer
     
    }
    console.log(x)

    //let y;  // declaration // let not allow to move Top
    var y; // declaration   // var allow to move top 
    y=300; //initilization 

}
fun()
