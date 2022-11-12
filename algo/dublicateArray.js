
let array=[10,9,7,5,9];
let count=1;

    for(i=0;i<=array.length;i++){
        for(j=i+1;j<=array.length;j++){
              if(array[i]===array[j]){
                console.log(array[i],count)
                count++

              }
        }
    }


