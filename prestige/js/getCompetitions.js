$.ajax({
    url: "/api/getcompetitions",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    complete: function(data,error) {
        var response = JSON.parse(data.responseText)
        for (i in response) {
            year = (response[i].Year)
            yearFour = year.slice(0, 4);
            $("#competition").append('<option name="' + response[i].Name + '" class="select-control" value="' + response[i].Id + '">' + response[i].Name + " " + yearFour + '</li>');
        }
    }
});