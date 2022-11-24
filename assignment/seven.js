// 7. write a program to input the principal rate and time and calculate the simple interest .
// calculate simple interes
function main(){
let p,r,t,si;
document.write("enter the principal , rate and time: ");
p=prompt("enter the principal");
r=prompt('enter the rate');
t=prompt('enter the duration');
si=(p*r*t)/100;
document.write(+p+"*"+r+"*"+t +"/ 100 ="+'simple interst = '+ si);                    
}
main()