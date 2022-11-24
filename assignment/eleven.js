// 11.  a cloth showroom has announced the following festival discount on the purchase of items,
// based on the total cost of the items purchased:

function main(){
let tc,d,ap;
document.write("enter the total cost of the items : "+d);
tc=prompt("enter cost");
if(tc<2000){
    d=tc*(5/100);
    document.write("discount of item is = "+ d);
    ap=tc-d;
    document.write("after discount pay the amount = "+ap);

}
    else if(tc>=2001 && tc<=5000){
   d=25/100*tc;
  
    }
    else if(tc>=5001&& tc<=10000){
   d=35/100*tc;
    }
    else {
        d=50/100*tc;
       
    }
    ap=tc-d;
    console.log("amount payable : "+ap)
}

main();