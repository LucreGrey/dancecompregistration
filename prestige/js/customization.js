let competition = document.getElementById("competition");
console.log(competition.innerText)
competition.addEventListener("DOMCharacterDataModified", function(event) {
    console.log(competition.innerText)
    if (document.getElementById("competition").innerText == "Prestige Dancesport"){
        console.log("Changed")
        document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
        document.getElementById("bg-video").src = "./video/Detroit.mp4"
    } else {
        console.log("Not Changed")
        document.getElementById("image-logo").src = "dcr.png"
        document.getElementById("bg-video").src = "./video/BGvid2.mp4"
    }
}, false); 



