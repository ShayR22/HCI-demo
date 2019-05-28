$(document).ready(function () {
    $(".list-group a").click(function () {
        $(".list-group a").each(function () {
            $(this).attr("class", "list-group-item list-group-item-action")
        })
        $(this).attr("class", "list-group-item list-group-item-action active")
    })



});


//TODO maybe add body to function
function generateData(search, searchSubject, sortBy) {

}