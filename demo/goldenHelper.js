$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


$("#goldenHelperSaveChangesButton").click(function () {
    var textStyle = extractStringFromSelect("model-font-style-section");
    var textSize = extractInt("model-font-style-input");

    $('html, body').css('font-family', textStyle);
    if (textSize != undefined) {
        var number = Math.min(Math.max(textSize, 10), 30);
        resizeInputs(number);
    }


})

$("#goldenHelperButton").click(function () {

    $("#model-font-style-input").val('');
})

function resizeInputs(newSize) {
    //all
    $('html, body').css('font-size', newSize);

    //  
    $(".title").css('font-size', newSize * 1.5);
    $("#searchBar").css('font-size', newSize * 1.5);
    $("#loginPageUsername").css('font-size', newSize);
    $("#loginPagePassword").css('font-size', newSize);
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