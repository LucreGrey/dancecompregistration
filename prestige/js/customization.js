let competition = document.getElementById("competition");
console.log(competition.innerText)
competition.addEventListener("DOMCharacterDataModified", updateSite); 

function updateSite(e){ 
    console.log(e)
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
  }

