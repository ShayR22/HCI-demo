$(document).ready(function () {
    $("#list-profile-years").click(function () {
        localStorage.setItem("searchBy", "years");
        window.location = "songs-category.html";
    });


    $("col-5 center a").click(function () {
        console.log("fml");
        var yearVal = $(this).attr("value");
        localStorage.setItem("yearValue", yearVal);
        window.location = "result.html";
    });

});