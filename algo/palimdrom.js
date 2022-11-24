
// palindrom (madam)

function isPalindrome(str) {
    let reversStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
    }
    if (str === reversStr) {
        console.log(str+ " = it is palindrom ")
    }
    else {
        console.log(str + " = it is not palindrom")
    }
}
isPalindrome("anni")
// isPalindrome("ann")
// ------------------------------------------------------------------------

let name="siddhu"
let array=[];
let count=0;
for (let i=0;i<=name.length-1;i++){
    for(let j=0;j<=name.length-1;j++){
        if(name[i]==name[j]){
            count +=1;
        }
    }
    if(count>1){
        array[count]=name[i];
    }
    count=0;
    console.log(name[i])
}





