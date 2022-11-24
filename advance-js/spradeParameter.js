// sprade parameter 

function fun(a,b,c,d){
console.log("this is a sprade parametar",a);
console.log("this is a sprade parametar",b)
console.log("this is a sprade parametar",c);
console.log("this is a sprade parametar",d)
}
let array=[73,33,77,99]
// fun(array[0],array[1],array[2],array[3]);
fun(...array);

// --------------------------------------------------------------

function sid(a,b,c,d){
    console.log(a);
    console.log(b)
    console.log(c)
    console.log(d)
}
let arr=[33,77,99,73]
// sid(arr[0],arr[1],arr[2],arr[3]);
sid(...arr)