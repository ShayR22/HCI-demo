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
    <nav aria-label='breadcrumb'> \
    <ol class='breadcrumb'> \
      <li class='breadcrumb-item active' aria-current='page'> \
      " + searchFor + " / " + searchCategory + " / " + searchSubCategory + " </li> \
    </ol> \
  </nav> \
    <div class='list-group' id='resultGenereated'> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>List group item heading</h5> \
        </div>\
        <p class='mb-1'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius \
            blandit.</p> \
        <small>Donec id elit non mi porta.</small> \
    </a> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>List group item heading</h5> \
        </div> \
        <p class='mb-1'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius \
            blandit.</p> \
    </a> \
    <a href='#' class='list-group-item list-group-item-action'> \
        <div class='d-flex w-100 justify-content-between'> \
            <h5 class='mb-1'>List group item heading</h5> \
        </div> \
        <p class='mb-1'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius \
            blandit.</p> \
        <small class='text-muted'>Donec id elit non mi porta.</small> \
    </a> \
</div> \
</div> \
        ");


}