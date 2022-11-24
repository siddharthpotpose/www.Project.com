// 10. write a program to accept a mark obtained by a student in computer science and print the grade accordingly. 
function main(){
let c;
document.write("enter marks in computer science : ")
c=prompt("enter marks in computer science : ");
if (c>=90){
    document.write("grade=A");
}
else if(c>=70 && c<90){
    document.write("grade=B");
}
else if(c>=50 && C<70){
    document.write("grade=c");
}
else{
    document.write("grade=D")
}
}
main();
// ---------------------------------------------------------------------------
