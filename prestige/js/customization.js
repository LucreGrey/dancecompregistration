    function updateWebsite(){
        console.log("Update Website Reached")
        console.log(document.getElementById("competition").innerHTML)
        console.log(document.getElementById("competition").innerText)
        if (document.getElementById("competition").innerHTML == "Prestige Dancesport"){
            console.log("Changed")
            document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
            document.getElementById("bg-video").src = "video/Detroit.mp4"
        } else {
            console.log("Not Changed")
            document.getElementById("image-logo").src = "images/dcrlogo.png"
            document.getElementById("bg-video").src = "video/BGvid2.mp4"
        }
    }