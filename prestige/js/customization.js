function customize(attr) {
    var innerText = attr.innerText;
    if (innerText = "Prestige Dancesport") {
        document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
        document.getElementById("bg-video").src = "./video/Detroit.mp4"
    } else {
        document.getElementById("image-logo").src = "dcr.png"
        document.getElementById("bg-video").src = ""
    }
}