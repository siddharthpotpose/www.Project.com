
function search(array, item) {

    for (i = 0; i <= 5; i++) {
        if (array[i] === item) {
            return 1;
        }
    }
    return -1;
}
let array = [1, 2, 5, 7, 9]
let item = 5;
ans = search(array, item);
console.log(ans);