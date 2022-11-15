// array=[1,5,3,7,6,2,4]

function sort(array){
    let bubbleSort;
do{
    bubbleSort=false;
    for(i=0;i<array.length-1;i++)
    {
        if(array[i]>array[i+1])
        {
            
            let temp=array[i];
            array[i]=array[i+1]; 
            array[i+1]=temp;
            bubbleSort=true;
        }
    }
}while(bubbleSort)
}
let array=[1,5,3,7,6,2,4]
sort(array)
console.log(array)