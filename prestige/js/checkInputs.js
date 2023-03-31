function checkInputs (str, box) {
    let try1 = str.search("<")
    console.log(str)
    console.log(try1)
    if (str == "" || str == undefined) {
        // Empty String
        alert("The " + box + " is empty or failed to process, please check it.")
        return false;
    } else if (try1 != -1) {
        // Failed
        alert("The " + box + " does not look right, please double check it.")
        return false;
    } else {
        return true;
    }
}

function checkEmail (str) {
    let try1 = str.search("@")
    let try2 = str.search("<script>")
    console.log(str)
    console.log(try1)
    if (str == "" || str == undefined) {
        // Empty String
        alert("The " + box + " is empty or failed to process, please check it.")
        return false;
    } else if (try1 != -1 && try2 == -1) {
        // Failed
        alert("The " + box + " does not look right, please double check it.")
        return false;
    } else {
        return true;
    }
}