$.get("lists/StateList.json",
function(data,error) {
    if (error) {
            console.log (error);
        }
    for (i in data) {
        $("#state-select").append('<li rel="' + data[i] + '">' + data[i] + '</li>');
    }
});