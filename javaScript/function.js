
function cookmaggi(maggi,pani){
    console.log("your maggi will be ready in " 
    + maggi * 2
    +" minutes "
    + " and ingradients are used :- "
    +maggi +" maggi "
    +pani +" cups of water "
    )
}
cookmaggi(4,8);
// ----------------------------------------------------------------------

// return function 

let select= prompt("which you want veg / non-veg sandwich")
let cheeze=prompt("how many slice of cheeze you want")
let sauce=prompt("which sauce you want")

function makeSandwich(select,cheeze,sauce){

   let sandwich= select + " : " + cheeze + "  slice of cheeze " + sauce + " : sauce " + " : your sandwich is ready";
   return sandwich 

}
let specialSandwich=  makeSandwich(select,cheeze,sauce)
document.write(specialSandwich)