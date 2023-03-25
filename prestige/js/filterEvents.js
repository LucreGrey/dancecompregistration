$(function filterEvents() {
    console.log("Filter Events Called")
    var leadStatus
    var followStatus
    if (document.getElementById("leadPro").checked == true) {
        leadStatus = "pro"
    } else { leadStatus = "am"}
    if (document.getElementById("followPro").checked == true) {
        followStatus = "pro"
    } else {followStatus = "am"}
    console.log("Lead and Follow Statuses:")
    console.log(leadStatus)
    console.log(followStatus)
    $.ajax({
        url: "/api/getevents",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({"leadstatus": leadStatus, "followstatus": followStatus}),
        complete: function(data,error) {
            console.log("DB Called")
            if (error) {
                    console.log (error);
                }
            else {
                if ((leadStatus == true) && (followStatus == true)) {
                    for (i in data) {
                        if (i % 2 == 0) {$("#Events").append('<div class="form-row">')}
                        $("#Events").append('<div class="checkbox-circle mt-6"><label><input type="checkbox" id="' + data[i] + '">  ' + data[i] + '</a><span class="checkmark"></span></label></div>')
                        if (i % 2 == 0) {$("#Events").append('</div>')}
                    }
                }
                else if (((leadStatus == true) && (followStatus == false)) || ((leadStatus == false) && (followStatus == true))) {
                    for (i in data) {
                        $("#Events").append('<div class="form-row">')
                        $("#Events").append('<div class="checkbox-circle mt-6"><label><input type="checkbox" id="' + data[i] + '">  ' + data[i] + '</a><span class="checkmark"></span></label></div>')
                        $("#Events").append('</div>')
                    }
                } 
                else {
                    for (i in data) {
                        if (i % 3 == 0) {$("#Events").append('<div class="form-row">')}
                        $("#Events").append('<div class="checkbox-circle mt-6"><label><input type="checkbox" id="' + data[i] + '">  ' + data[i] + '</a><span class="checkmark"></span></label></div>')
                        if (i % 3 == 0) {$("#Events").append('</div>')}
                    }
                }
            }
        }
    });
})