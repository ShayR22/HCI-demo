$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


$("#goldenHelperSaveChangesButton").click(function () {
    var textStyle = extractStringFromSelect("model-font-style-section");
    var textSize = extractInt("model-font-style-input");

    $('html, body').css('font-family', textStyle);
    $(".title").css('font-size', textSize * 1.5);
    $('html, body').css('font-size', textSize);

})

function resizeInputs(newSize) {
    $(".title").css('font-size', textSize * 1.5);
    $('html, body').css('font-size', textSize);
    $("#searchBar").css('font-size', textSize * 1.5);
}


function extractStringFromSelect(id) {
    return $("#" + id + " option:selected").val();
}

function extractInt(id) {
    var numStr = $("#" + id).val();
    var number = parseInt(numStr);
    if (isNaN(number)) {
        $("#" + id).text("Please enter a number here");
        return undefined;
    } else {
        return number;
    }
}