let competition = document.getElementById("competition");
console.log(competition.innerText)
competition.addEventListener("change", updateSite); 

function updateSite(e){ 
    console.log(e)
    console.log(competition.innerText)
        if (document.getElementById("competition").innerText == "Prestige Dancesport"){
        document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
        document.getElementById("bg-video").src = "./video/Detroit.mp4"
    } else {
        document.getElementById("image-logo").src = "dcr.png"
        document.getElementById("bg-video").src = "./video/BGvid2.mp4"
    }
  }

