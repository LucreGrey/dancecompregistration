    function updateWebsite(){
        console.log("Update Website Reached")
        var competition = document.getElementById("competition")
        var text = competition.option[competition.selectedIndex].text;
        console.log(text)
        if (text == "Prestige Dancesport"){
            console.log("Changed")
            document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
            document.getElementById("bg-video").src = "video/Detroit.mp4"
        } else {
            console.log("Not Changed")
            document.getElementById("image-logo").src = "images/dcrlogo.png"
            document.getElementById("bg-video").src = "video/BGvid2.mp4"
        }
    }