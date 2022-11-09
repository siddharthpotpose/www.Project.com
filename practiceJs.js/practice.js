// function simple 
function fun(){
    console.log("hello world")
} 
fun()
fun()
fun()
// -------------------------------------
// parametarised function /argument 
function functionName(a,b)
{
      a=a+b
    console.log("this is a parametarised function ="+a)
}
functionName(100,200)
// ----------------------------------------------
function multiplication(num1,num2)
{
    mul=num1*num2
    console.log("multiplication of 500 * 2 ="+mul )
}
multiplication(500,2)
// ---------------------------------------------------
// return function 
function addition(num3,num4)
{
  return num3+num4
    
}
let ans=addition(500,300)
console.log("return function ="+ans)
// ------------------------------------------------------

function division(p,i)
{
    return p/i
}
let result=division(5000,10)
console.log("divison ="+result)
// -------------------------------------------------
// if else 
// decide the weather based on the temperature 
let temp=7;

if (temp<=0)
{
    console.log("freezing weather")
}
else if (temp>0&&temp<=10)
{
    console.log("very cold weather")
}
else if (temp>10&&temp<=20)
{
    console.log("cold weather")
}
else if (temp>20&&temp<=30)
{
    console.log("normal weather")
}
else if (temp>30&&temp<=40)
{
    console.log("its hot")
}
else if (temp>=40)
{
    console.log("its very hot")
}
// ---------------------------------------------------
// give remark based on the mark obtaine 

// --------------------------------------------------------
// display the name of the month based on the number 
let number=3;
if (number==1)
{
    console.log("january")
}
else if (number==2)
{
    console.log("february")
}
else if (number==3)
{
    console.log("march")
}
else if (number==4)
{
    console.log("april")
}
else if (number==5)
{
    console.log("may")
}
else if (number==6)
{
    console.log("june")
}
else if (number==7)
{
    console.log("jully")
}
else if (number==8)
{
    console.log("auguest")
}
else if (number==9)
{
    console.log("september")
}
else if (number==10)
{
    console.log("octomber")
}
else if (number==11)
{
    console.log("november")
}
else if (number==12)
{
    console.log("december")
}
else {
    console.log("something wrong")
}
// ----------------------------------------------------
// loop 
// display a number from 1 to 100 
for (a=1;a<=100;a++)
console.log(a)
// -----------------------------------
// display following patten $$$$$ 5 time
for(b=1;b<=5;b++)
console.log("$$$$$")
// ------------------------------------
// print the first 20 even number 
for(c=1;c<=10;c++)
console.log(c*2)
// --------------------------------------
// display the table of 5 
for(t=1;t<=10;t++)
console.log(t*5)
// --------------------------------------
// display 20 odd numbers 
for(o=1;o<=40;o++)
console.log(o++)
// ------------------------------------------------

// switch case 
// Question = Return the weekdays as a number between 1 to 7.
let day=3;
switch (day) {
    case 1:
        console.log("monday")
        break;
        
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
     
    
    default:
        console.log("something wrong")
        break;
}
// --------------------------------------------------
// nested switch case 

let menu;
menu=2;
switch (menu) {
    case 1:
        console.log("veg menu")
       
    let veg=1;
    switch (veg) {
        case 1:
            console.log("panner tikka")
            break;
        case 2:
            console.log("panner masala")
            break;
        case 3:
            console.log("panner kabab")
            break;
    
      
    }
    break;
    case 2:
        console.log("non veg")
        
        let non=3;
        switch (non) {
            case 1:
                console.log("chicken tikka")
                break;
            case 2:
                console.log("chicken lolipop")
                break;
            case 3:
                console.log("chicken tandoori")
                break;
        
            default:
                console.log("not available")
                break;
        }
        break;

    default:
        console.log("not available")
        break;
}
// -----------------------------------------------------------------
// loop 
// while loop 
// for (Int16Array;condi;dec)
let i=1;
while (i<=20){

    console.log("while loop = "+i)
    i++
}
// ---------------------------------------------
let s=1;
do{
    console.log("do while = "+s)
    s++
}while(s<=10)
// -----------------------------------------

// function simple 

function funs(){
    console.log("hello this is a simple function")
}
funs();
// -------------------------------------------------------

// parametarised / argument function 

function fun1(ss,pp){
 ss=ss+pp
console.log("this is a argument function = "+ ss)
}
fun1(20,20)
// ----------------------------------------------------------------
// return function 

function funs3(aa,bb){
    return aa*bb
    
   

} 
let cc=funs3(10,5);
console.log("this is a retun function="+ cc);
// -------------------------------------------------------------------------
// statement for loop 
for (w=1;w<=10;w++){
    console.log( "even number = "+w)
}
// -----------------------------------------------------
// while loop 

let qq=1;
while (qq<=10){
    console.log("while loop ="+qq);
    qq++
}
// ----------------------------------------------------

// do while loop 
let ee=1;
do{

    console.log("this is a do while loop mul ="+ee*5)
    ee++
} while (ee<=10);
// ------------------------------------------------------------------------
// statement branching 
 let markss=47;
 if (markss>=35){
    console.log("your are  pass = "+markss)
 }
 else {
    console.log("you are fail")
 }
// -------------------------------------------------------------------
// if else ladder 

let dayss=3;
if (dayss==1){
    console.log("today is monday")
}
else if (dayss==2){
    console.log("today is tuesday")
}
else if (dayss==3){
    console.log("today is wednessday")
}
else {
    console.log("somethimg wrong")
}
// ----------------------------------------------------------
// switch case 

let  dayyss=3;
switch (dayyss) {
    case 1:
        console.log("monday")
        
        break;
     case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;

    default:
        console.log("something wrong")
        break;
}










