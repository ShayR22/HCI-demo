$(document).ready(function () {

    localStorage.setItem("searchFor", "Television");

    $('#myList a').on('shown.bs.tab', function (e) {
        $(e.relatedTarget).removeClass('active'); // previous active tab
        localStorage.setItem("searchCategory", $(this).text());
    })

    $('#myList1 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('/result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })

    $('#myList2 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('/result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })

    $('#myList3 a').on('shown.bs.tab', function (e) {
        localStorage.setItem("searchSubCategory", $(this).text());
        window.location.assign('/result.html');
        $(e.relatedTarget).removeClass('active'); // previous active tab
    })


});