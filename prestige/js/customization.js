var compSelector = document.querySelector('#competition');

var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
        console.log(mutation.type); // <- It always detects changes
        if (compSelector.innerHTML == "Prestige Dancesport"){
            document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
            document.getElementById("bg-video").src = "./video/Detroit.mp4"
        } else {
            document.getElementById("image-logo").src = "dcr.png"
            document.getElementById("bg-video").src = "./video/BGvid2.mp4"
        }
    });    
});