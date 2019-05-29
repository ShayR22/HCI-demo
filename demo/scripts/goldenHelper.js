$(document).ready(function () {
    if (localStorage.hasOwnProperty("textSize")) {
        console.log("local storage has textSize prop")
        var number = parseInt(localStorage.getItem("textSize"));
        resizeInputs(number);
    } else {
        console.log("local storage doesnt has textSize prop");
    }


$(".goldenListGroup .list-group a").click(function () {
    $(".goldenListGroup .list-group a").each(function () {
        $(this).attr("class", "list-group-item list-group-item-action")
    })
    $(this).attr("class", "list-group-item list-group-item-action active")
})



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


$("#goldenHelperSaveChangesButton").click(function () {
    console.log("fml");
    var textStyle = extractStringFromSelect("model-font-style-section");
    var textSize = extractInt("font-size-radio");
    console.log("text size is: " + textSize);

    $('html, body').css('font-family', textStyle);
    if (textSize != undefined) {
        var number = Math.min(Math.max(textSize, 10), 30);
        localStorage.setItem("textSize", textSize);
        resizeInputs(number);
    }
});



$("#goldenHelperButton").click(function () {
    console.log("fml");
    $("#model-font-style-input").val('');
});

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

function extractInt(radioButtonName) {
    var number;
    $(".goldenListGroup .list-group a").each(function () {
        if ($(this).attr("class") == "list-group-item list-group-item-action active") {
            var textSize = $(this).attr("value");
            console.log("text size is: " + textSize);
            number = parseInt(textSize);
            if (isNaN(number)) {
                console.log("Error on radio button given, value is not a number");
            } else {
                return;
            }
            return;
        }
    });
    return number;
}
})

