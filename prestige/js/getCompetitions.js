$.ajax({
    url: "/api/getcompetitions",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    complete: function(data,error) {
        var response = JSON.parse(data.responseText)
        for (i in response) {
            $("#competition-select").append('<option value="'+ response[i].Id + '">' + response[i].Name + " " + response[i].Year + '</option>');
        }
    }
});