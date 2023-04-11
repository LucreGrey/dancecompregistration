window.onload = function() {
    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    });
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    });

    let competition = document.getElementById("competition");
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

}
