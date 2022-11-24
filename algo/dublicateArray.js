
let array = [10, 9, 7, 9, 5, 9, 8];

function find(array){
for (i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      console.log(array[i])
      
    }
  }
}
}
find(array);


