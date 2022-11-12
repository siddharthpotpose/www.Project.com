// factorial 

function factorial(number){
    fact=1;
    if(number<=1)
    {
        console.log("factorial of negative number is not possible ")
    }
    for (i=1;i<=number;i++)
    {
        fact=fact*i;
        
    }
    console.log("factorial of 5 is = "+fact)
}
factorial(5);