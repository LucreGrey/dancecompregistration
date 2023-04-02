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

    var compSelector = document.querySelector('#myDiv');

    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            console.log(mutation.type); // <- It always detects changes
            if (compSelector.innerHTML == "Prestige Dancesport"){
                document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
                document.getElementById("bg-video").src = "./video/Detroit.mp4"
            } else {
                document.getElementById("image-logo").src = "dcr.png"
                document.getElementById("bg-video").src = ""
            }
        });    
    });
}