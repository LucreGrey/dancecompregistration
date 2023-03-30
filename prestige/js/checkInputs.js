function checkInputs (str) {
    let try1 = str.search("<")
    let try2 = str.search("$")
    if (try1 == -1 && try2 == -1) {
        // Passed the test
        return true
    } else {
        // Failed
        alert(str + " is not correct, please double check it.")
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
        alert(str + " doesn't look right as an email address, please double check it. Try1 == " + try1 + "Try2 == " + try2);
        return false;
    }
}