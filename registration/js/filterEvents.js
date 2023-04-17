////////////////////////////////////////////////////////////////////////////////////////////////////////
function filterEvents() {
    console.log("Filter Events Called")
    var leadStatus
    var followStatus
    var competitionselection = currentComp;
    var compid = currentCompId;
    console.log("CompID = " + compid)
    if (document.getElementById("leadPro").checked == true) {
        leadStatus = "pro"
    } else { leadStatus = "am"}
    if (document.getElementById("followPro").checked == true) {
        followStatus = "pro"
    } else {followStatus = "am"}
    $.ajax({
        url: "/api/getevents",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({"leadstatus": leadStatus, "followstatus": followStatus, "compid": compid}),
        complete: function(data,error) {
            var response = JSON.parse(data.responseText)
            document.getElementById("lbn-column").innerHTML = "";
            document.getElementById("lbn-price-column").innerHTML = "";
            document.getElementById("srs-column").innerHTML = "";
            document.getElementById("srs-price-column").innerHTML = "";
            
            // Both Pro Competitors
            if ((leadStatus == "pro") && (followStatus == "pro")) {
                for (style in stylesList) {
                    if (stylesList[style] == "Latin" || stylesList[style] == "Ballroom" || stylesList[style] == "Nightclub") {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#lbn-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#lbn-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#lbn-price-column").append('<div class="h2Other">Price</div>')
                                    $("#lbn-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    } else {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#srs-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#srs-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#srs-price-column").append('<div class="h2Other">Price</div>')
                                    $("#srs-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    }
                }
                $("#srs-column").append('<div class="button-placeholder"></div>')
            }
            // Pro Am Couples
            else if (((leadStatus == "pro") && (followStatus == "am")) || ((leadStatus == "am") && (followStatus == "pro"))) {
                for (style in stylesList) {
                    if (stylesList[style] == "Latin" || stylesList[style] == "Ballroom" || stylesList[style] == "Nightclub") {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#lbn-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#lbn-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#lbn-price-column").append('<div class="h2Other">Price</div>')
                                    $("#lbn-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    } else {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#srs-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#srs-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#srs-price-column").append('<div class="h2Other">Price</div>')
                                    $("#srs-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    }
                }
                $("#srs-column").append('<div class="button-placeholder"></div>')
            }
            // Both Amateur Competitors
            else {
                for (style in stylesList) {
                    if (stylesList[style] == "Latin" || stylesList[style] == "Ballroom" || stylesList[style] == "Nightclub") {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#lbn-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#lbn-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Age + ' ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#lbn-price-column").append('<div class="h2Other">Price</div>')
                                    $("#lbn-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#lbn-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    } else {
                        if (response.some(e => e.Style == stylesList[style])) {
                            var count = 0;
                            for (i in response) {
                                if (count == 0) {
                                    $("#srs-column").append('<div class="h2Other">' + stylesList[style] + '</div>')
                                    $("#srs-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-column").append('<div class="checkbox-circle mt-7"><label><input type="checkbox" name="eventSelect" id="' + response[i].Name + '">  ' + response[i].Age + ' ' + response[i].Name + ' (' + response[i].Dances + ')</a><span class="checkmark"></span></label></div>')
                                }
                                count++;
                            }

                            var count2 = 0;
                            for (i in response) {
                                if (count2 == 0) {
                                    $("#srs-price-column").append('<div class="h2Other">Price</div>')
                                    $("#srs-price-column").append('<div class="form-row"></div>')
                                }
                                if (response[i].Style==stylesList[style]) {
                                    $("#srs-price-column").append('<div class="checkbox-circle mt-7"><label>$ ' + response[i].Price + '</label></div>')
                                }
                                count2++;
                            }
                        }
                    }
                }
                $("#srs-column").append('<div class="button-placeholder"></div>')
            }
        }
    });
}