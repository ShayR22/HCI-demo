$(document).ready(function () {

    var searchFor = localStorage.getItem("searchFor");
    var searchCatergory = localStorage.getItem("searchCategory");
    var searchSubCategory = localStorage.getItem("searchSubCategory");
    generateData(searchFor, searchCatergory, searchSubCategory);
    $("#dataGenerated .list-group a").click(function (e) {
        e.preventDefault();
        $("#dataGenerated .list-group a").each(function () {
            $(this).attr("class", "list-group-item list-group-item-action")
        })
        $(this).attr("class", "list-group-item list-group-item-action active")
    });


});


//TODO maybe add body to function
function generateData(searchFor, searchCategory, searchSubCategory) {

    $("#dataGenerated").html("");
    $("#dataGenerated").html(" \
    <div class='list-group' id='resultGenereated'> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>Name</h5> \
        </div>\
        <p class='mb-1'>Details</p> \
    </a> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>Name</h5> \
        </div> \
        <p class='mb-1'>Details</p> \
    </a> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>Name</h5> \
        </div> \
        <p class='mb-1'>Details</p> \
    </a> \
</div> \
</div> \
        ");


}