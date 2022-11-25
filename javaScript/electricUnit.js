
let unit=prompt("calculating your electricity units. pls enter your electricity units ");
if(unit>100){
    document.write("you ara consumed "+unit+" units and per unit charge is 15 Rs/per unit. pay total bill is =",unit*15 +"/Rs")
}
else if(unit>80){
    document.write("you are consumed "+unit+" units and per unit charges is 13 Rs/per unit. pay total bill is = ",unit*13 +"/Rs")
}
else if(unit>60){
    document.write("you are consumed "+unit+" units and per unit charge is 11 Rs/per unit. pay total bill = ",unit*11 +"/Rs")
}
else if(unit>40){
    document.write("you are consumed "+ unit+" units and per unit charge is 10 Rs/per unit. pay total bill = ",unit*10 +"/Rs")
}
else if(unit>20){
    document.write("you are consumed "+unit+" units and per unit charge is 8 Rs/per unit. pay total bill = ",unit*8 +"/Rs")
}
else if(unit>10){
    document.write("you are consumed "+unit+" units and per unit charges is 5 Rs/per unit. pay total bill = ",unit*5 +"/Rs")
}
else if(unit>=1){
    document.write("you are consumed "+unit+" units and per unit charge is 3 Rs/per unit. pay total bill = ",unit*3 +"/Rs")
}
else {
    document.write("wow you are consumed 0 units. your electric bill is 0 ")
}

