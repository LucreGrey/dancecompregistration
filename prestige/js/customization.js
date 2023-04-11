function updateWebsite(){
    var competition = document.getElementById("competition")
    var text = competition.options[competition.selectedIndex].text;
    currentComp = text;
    currentCompId = document.getElementById("competition").value;
    console.log(currentComp)
    console.log(currentCompId)
    if (text == "Prestige Dancesport 2023"){
        document.getElementById("image-logo1").src = "images/PrestigeLogo2.png";
        document.getElementById("image-logo2").src = "images/PrestigeLogo2.png";
        document.getElementById("image-logo3").src = "images/PrestigeLogo2.png";
        document.getElementById("bg-video").src = "video/Detroit.mp4";
        document.getElementById("finalFormHeader").src = text;

    } else {
        document.getElementById("image-logo1").src = "images/dcrlogo.png";
        document.getElementById("image-logo2").src = "images/dcrlogo.png";
        document.getElementById("image-logo3").src = "images/dcrlogo.png";
        document.getElementById("bg-video").src = "video/BGvid2.mp4";
        document.getElementById("finalFormHeader").src = text;
    }
}