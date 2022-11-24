// bubble-sort 
// ------------------------------------------------------------
let array = [1, 5, 7, 9, 2, 3, 3, 8, 9, 4, 6];
function sort(array) {

    let bubbleSort;
    do {
        bubbleSort = false;

        for (i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                bubbleSort = true;
            }
        }
    } while (bubbleSort)
}
sort(array)
console.log(array)
// -----------------------------------------------------------------
// bubble-sort 
// ---------------------------------------------------------------------

let array1 = [1, 7, 6, 2, 9, 0, 3, 5, 4, 8];
function bubbleSort1(array1) {
    let sortExample1;
    do {
        sortExample1 = false;
        for (i = 0; i < array1.length - 1; i++) {
            if (array1[i] > array1[i + 1]) {
                let temp1 = array1[i];
                array1[i] = array1[i + 1];
                array1[i + 1] = temp1;
                sortExample1 = true;
            }
        }
    } while (sortExample1);
}
bubbleSort1(array1);
console.log(array1);
// ------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// example-2  bubbleSort = decending order
// -----------------------------------------------------------------------

let example2 = [5, 8, 7, 2, 3, 4, 6, 1, 9];
function bubbleSort2(example2) {
    let sortExample2;
    do {
        sortExample2 = false;
        for (let a = 0; a < example2.length - 1; a++) {
            if (example2[a] < example2[a + 1]) {
                let temp2 = example2[a];
                example2[a] = example2[a + 1];
                example2[a + 1] = temp2;
                sortExample2 = true;
            }
        }
    } while (sortExample2)
}
bubbleSort2(example2);
console.log(example2);
// --------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// example 3 bubblesorting ascending order

// -------------------------------------------------------------

let example3 = [8, 4, 8, 5, 8, 9, 6, 3, 7, 3];
function bubbleSort3(example3) {
    let sortExample3;
    do {
        sortExample3 = false;
        for(b=0;b<example3.length-1;b++){
            if(example3[b]>example3[b+1]){
                let temp4=example3[b];
                example3[b]=example3[b+1];
                example3[b+1]=temp4;
                sortExample3=true;
            }
        }
    } while (sortExample3);
}
bubbleSort3(example3);
console.log(example3);
