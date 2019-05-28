$(document).ready(function () {
    $("#list-profile-years").click(function () {
        console.log("fml 2")
        localStorage.setItem("searchBy", "years");
        window.location = "songs-category.html";
    });


    $("#songCategory a").click(function () {
        console.log("fml");
        var yearVal = $(this).attr("value");
        localStorage.setItem("yearValue", yearVal);
        window.location = "result.html";
    });

});