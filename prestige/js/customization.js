const competition = document.getElementById("competition");
competition.addEventListener("change", (event)  => { 
    console.log(document.getElementById("competition").innerText)
    if (document.getElementById("competition").innerText == "Prestige Dancesport"){
    document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
    document.getElementById("bg-video").src = "./video/Detroit.mp4"
} else {
    document.getElementById("image-logo").src = "dcr.png"
    document.getElementById("bg-video").src = "./video/BGvid2.mp4"
}
  }, false);

