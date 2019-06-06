$(document).ready(function () {
    // $("#list-profile-years").click(function () {
    //     console.log("fml 2")
    //     localStorage.setItem("searchBy", "years");
    //     window.location = "songs-category.html";
    // });


    // $("#songCategory a").click(function () {
    //     console.log("fml");
    //     var yearVal = $(this).attr("value");
    //     localStorage.setItem("yearValue", yearVal);
    //     window.location = "result.html";
    // });
    localStorage.setItem("searchFor", "Songs");

    $('#myList a').on('shown.bs.tab', function (e) {
        $(e.relatedTarget).removeClass('active'); // previous active tab
        localStorage.setItem("searchCategory", $(this).text());
    })

    $('#myList1 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('./result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })

    $('#myList2 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('./result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })

    $('#myList3 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('./result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })


});