// palindrom = 

function searching(name)
{
let word='';
for(let i=name.length-1; i>=0; i--)
{
    word=word+name[i];
}
if(name===word){
    console.log(name + " = it is palindrom ")
}
else{
    console.log(name+ " = it is not palindrom")
}
}
searching("sis")
// --------------------------------------------------------

function name(word){
let search;
for(let i=word.length-1;i>=0;i--){
    search+=word[i];
}
if(word===search){
    console.log(word+" = it is palindrom")
}
else{
    console.log(word+" = it is not palindrom")
}
}
name("pipi");