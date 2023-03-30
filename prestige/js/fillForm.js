function getInfo() {
    Couple.lfn = document.getElementById("lfn").value;
    Couple.lln = document.getElementById("lln").value;
    Couple.dobl = document.getElementById("dobl").value;
    Couple.lmp = document.getElementById("lmp").value;
    Couple.lndca = document.getElementById("lndca").value;
    Couple.lemail = document.getElementById("lemail").value;

    Couple.ffn = document.getElementById("ffn").value;
    Couple.fln = document.getElementById("fln").value;
    Couple.dobf = document.getElementById("dobf").value;
    Couple.fmp = document.getElementById("fmp").value;
    Couple.fndca = document.getElementById("fndca").value;
    Couple.femail = document.getElementById("femail").value;

    Couple.addr = document.getElementById("addr").value;
    Couple.city = document.getElementById("city").value;
    Couple.zip = document.getElementById("zip").value;
    Couple.state = document.getElementById("state").innerText;
    Couple.country = document.getElementById("country").value;
    Couple.studio = document.getElementById("studio").value;

    // If any of these aren't filled in, undefined, or fail the checkInputs/checkEmail test, throw an alert
    if (
        (Couple.lfn == undefined || Couple.lfn == "" || checkInputs(Couple.lfn) == false) ||
        (Couple.lln == undefined || Couple.lln == "" || checkInputs(Couple.lln) == false) ||
        (Couple.dobl == undefined || Couple.dobl == "" || checkInputs(Couple.dobl) == false) ||
        (Couple.lmp == undefined || Couple.lmp == "" || checkInputs(Couple.lmp) == false) ||
        (Couple.lndca == undefined || Couple.lndca == "" || (Number.isInteger(Couple.lndca) == false) || checkInputs(Couple.lndca) == false ) ||
        (Couple.lemail == undefined || Couple.lemail == "" || checkEmail(Couple.lemail) == false) ||

        (Couple.ffn == undefined || Couple.ffn == "" || checkInputs(Couple.ffn) == false) ||
        (Couple.fln == undefined || Couple.fln == "" || checkInputs(Couple.fln) == false) ||
        (Couple.dobf == undefined || Couple.dobf == "" || checkInputs(Couple.dobf) == false) ||
        (Couple.fmp == undefined || Couple.fmp == "" || checkInputs(Couple.fmp) == false) ||
        (Couple.fndca == undefined || Couple.fndca == "" || (Number.isInteger(Couple.fndca) == false) || checkInputs(Couple.fndca) == false) ||
        (Couple.femail == undefined || Couple.femail == "" || checkEmail(Couple.femail) == false) ||

        (Couple.addr == undefined || Couple.addr == ""  || checkInputs(Couple.addr) == false) ||
        (Couple.city == undefined || Couple.city == "" || checkInputs(Couple.city) == false) ||
        (Couple.zip == undefined || Couple.zip == "" || checkInputs(Couple.zip) == false) ||
        (Couple.state == undefined || Couple.state == "" || checkInputs(Couple.state) == false) ||
        (Couple.country == undefined || Couple.country == "" || checkInputs(Couple.country) == false) ||
        (Couple.studio == undefined || Couple.studio == "" || checkInputs(Couple.studio) == false) 
    ) {
        return false;
    }
    return true;
}

function checkEvents() {
    var checkedBoxes = document.querySelectorAll('input[name=selectedEvents]:checked');
    console.log(checkedBoxes);
    console.log(checkedBoxes[0].innerText)
}

function fillForm() {
    document.getElementById("formlfn").innerText = Couple.lfn;
    document.getElementById("formlln").innerText = Couple.lln;
    document.getElementById("formdobl").innerText = Couple.dobl;
    document.getElementById("formlmp").innerText = Couple.lmp;
    document.getElementById("formlndca").innerText = Couple.lndca;
    document.getElementById("formlemail").innerText = Couple.lemail;

    document.getElementById("formffn").innerText = Couple.ffn;
    document.getElementById("formfln").innerText = Couple.fln;
    document.getElementById("formdobf").innerText = Couple.dobf;
    document.getElementById("formfmp").innerText = Couple.fmp;
    document.getElementById("formfndca").innerText = Couple.fndca;
    document.getElementById("formfemail").innerText = Couple.femail;

    document.getElementById("formaddr").innerText = Couple.addr;
    document.getElementById("formcity").innerText = Couple.city;
    document.getElementById("formzip").innerText = Couple.zip;
    document.getElementById("formstate").innerText = Couple.state;
    document.getElementById("formcountry").innerText = Couple.country;
    document.getElementById("formstudio").innerText = Couple.studio;
}