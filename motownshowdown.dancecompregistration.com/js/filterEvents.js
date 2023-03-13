$(function filterEvents() {

    console.log("Clicked");
    var leadStatus = document.getElementById("leadPro").checked
    var followStatus = document.getElementById("followPro").checked
    if ((leadStatus == true) && (followStatus == true)) {
        //Both are Pros
        $.get("lists/DefaultProProEvents.json",
        function(data,error) {
            if (error) {
                    console.log (error);
                }
            for (i in data) {
                //$("#Events").append('<li rel="' + data[i] + '">' + data[i] + '</li>');
                if (i % 2 == 0) {$("#Events").append('<div class="form-row">')}
                $("#Events").append('<div class="checkbox-circle mt-6"><label><input type="checkbox" id="' + data[i] + '">  ' + data[i] + '</a><span class="checkmark"></span></label></div>')
                if (i % 2 == 0) {$("#Events").append('</div>')}
            }
        });
    } else if ((leadStatus == true && followStatus == false) || (leadStatus == false && followStatus == true)) {
        // Pro Am
    } else {
        // Both Am
        // What age?

        // Which Events Based on Age
    }

})