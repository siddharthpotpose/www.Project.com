let hello= document.querySelector("button");
hello.addEventListener("click",fun);

function fun(){
// alert("Hello world")
let name=prompt("enter your name")
hello.textContent="happy diwali : :"+name;
}
fun()