$(document).ready(function () {
    console.log("page uploaded");
    $("#resultScreen").hide();

    $("#searchButton").click(function () {

        //TODO get search querys (Search For and Sort by)
        $("#searchScreen").hide();
        $("#resultScreen").show();
    })

    $("#backToSearchScreen").click(function () {
        console.log("back to search screen button clicked");

        //TODO add clear to the result
        $("#resultScreen").hide();
        $("#searchScreen").show();
    })


})