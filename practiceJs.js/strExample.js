// str example 
function normal(str){

    let output='';
    for(i=0;i<=str.length-1;i++){
        console.log(str[i])
    }
    return output;
}
normal("sid")
// --------------------------------------------------

// str reverse example 
function reverse(str){
    let output='';
    for(i=str.length-1;i>=0;i--){
        console.log(str[i])
    }
    return output;
}
reverse("esoptop")