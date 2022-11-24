// 9. convert the following if else if construct into switch case 
var num=3;
if (num==1){
    console.log("good");
}
else if(num==2){
    console.log("better")
}
else if(num==3){
    console.log("best")
}
else{
    console.log("invalid");
}

switch(num){
    case 1:
        console.log("good");
        break;
        case 2:
            console.log("better")
            break;
            case 3:
                console.log("best")
                break;
                default :
                console.log("invalid");
}
