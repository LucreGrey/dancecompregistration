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