function generateData(search, searchSubject, sortBy) {



}

$(".list-group a").click(function () {
    $(".list-group a").each(function () {
        $(this).attr("class", "list-group-item list-group-item-action")
    })
    $(this).attr("class", "list-group-item list-group-item-action active")
})