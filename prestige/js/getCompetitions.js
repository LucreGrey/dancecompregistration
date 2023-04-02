$.ajax({
    url: "/api/getcompetitions",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    complete: function(data,error) {
        var response = JSON.parse(data.responseText)
        for (i in response) {
            $("#competition-select").append('<option value="'+ response[i].Id + '">' + response[i].Name + " " + response[i].Year + '</option>');
        }
    }
});