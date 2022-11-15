
// array=           [1,7,5,3,4,2,6]
// descendin order  [7,6,5,4,3,2,1]

function fun(arr) {
    let sort;
    do {
        sort = false;
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                sort = true;
            }
        }

    } while (sort);
}
arr = [1, 3, 7, 5, 4, 6, 2]
fun(arr)
console.log(arr)