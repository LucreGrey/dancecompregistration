function checkInputs (str) {
    let try1 = str.search("<")
    let try2 = str.search("$")
    if (try1 == -1 && try2 == -1) {
        // Passed the test
        return true
    } else {
        // Failed
        return false;
    }
}

function checkEmail (str) {
    let try1 = str.search("@")
    let try2 = str.search("<script>")
    if (try1 != -1 && try2 == -1) {
        // Passed
        return true
    } else {
        // Failed
        return false;
    }
}