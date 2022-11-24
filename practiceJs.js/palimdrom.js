
function palimdrome(str) {
    let isPalimdeome = "";
    for (i = str.length - 1; i >= 0; i--) {
        isPalimdeome = isPalimdeome + str[i];

    }
    if (str === isPalimdeome) {
        console.log(str + " = it is palimdrome")
    }
    else {
        console.log(str + " = it is not palimdeome")
    }
}

palimdrome("madam")