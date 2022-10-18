
let a=100;
for (p=2;p<=100;p++){
    let prime=true;
    for (let j=2;j<=p;j++){
        if(p%j===0&&j!==j)
        prime=false;
    }
    if(prime===true){
        console.log(p);
    }
}
// --------------------------------------------------

// let age=20;
function min(a,b){
    result= a+b;
    ans=a-b;
    console.log("addition of a+b="+result)
    console.log("addition of a+b="+ans)

}
min(10,10)
// --------------------------------------------------











// for (s=1;s<=10;s++)
// console.log(s*3)


// for (p=1;p<=10;p++)
// console.log(p*2)
// -----------------------------------------------

// let msg=10;
// msg=prompt("")
// let a;
// function fun(){
//  let a=   document.getElementById("fun").value;
//  document.write("value"+a)

// }
// fun();
// -----------------------------------------------------------------
