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
    Couple.state = document.getElementById("state").value;
    Couple.country = document.getElementById("country").value;
    Couple.studio = document.getElementById("studio").value;
}

function fillForm() {
    document.getElementById("formlfn").value = Couple.lfn;
    document.getElementById("formlln").value = Couple.lln;
    document.getElementById("formdobl").value = Couple.dobl;
    document.getElementById("formlmp").value = Couple.lmp;
    document.getElementById("formlndca").value = Couple.lndca;
    document.getElementById("formlemail").value = Couple.lemail;

    document.getElementById("formffn").value = Couple.ffn;
    document.getElementById("formfln").value = Couple.fln;
    document.getElementById("formdobf").value = Couple.dobf;
    document.getElementById("formfmp").value = Couple.fmp;
    document.getElementById("formfndca").value = Couple.fndca;
    document.getElementById("formfemail").value = Couple.femail;

    document.getElementById("formaddr").value = Couple.addr;
    document.getElementById("formcity").value = Couple.city;
    document.getElementById("formzip").value = Couple.zip;
    document.getElementById("formstate").value = Couple.state;
    document.getElementById("formcountry").value = Couple.country;
    document.getElementById("formstudio").value = Couple.studio;
}