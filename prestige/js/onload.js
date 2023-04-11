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
    var competitiontext = competition.firstChild;
    competitiontext.addEventListener("DOMCharacterDataModified", updateWebsite(), false)
}
