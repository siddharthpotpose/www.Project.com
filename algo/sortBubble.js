
function sortBubble(array){
let sort;
    do{
        sort=false;
        for(let i=0;i<array.length-1;i++){

            if(array[1]>array[i+1]){
                let temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
                sort=true
            }
        }
    }while(sort)
}
let array=[1,3,5,8,2]
sortBubble(array)
console.log(array)