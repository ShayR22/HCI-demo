var username = "shay";
var password = "123";

$("#loginPageLogin").click(function () {

    if (username == undefined || password == undefined) {
        alert("Wrong username or password");
        return;
    }

    var usernameInput = $("#loginPageUsername").val();
    var passwordInput = $("#loginPagePassword").val();

    console.log(usernameInput + " " + passwordInput);
    if (username == usernameInput && password == passwordInput) {
        window.location.href = "searchAndResultPages.html";
    } else {
        alert("Wrong username or password");
    }

})


$("#loginPageSignUp").click(function () {
    window.location = "signup.html";
})


$("#signupSignup").click(function () {
    if (!isEmptyData()) {
        username = $("#signupUsername").val();
        password = $("#signupPassword").val();
        console.log(username + " " + password);

        window.location.href = "login.html";
    } else {
        alert("please fill username and password");
    }
})

function isEmptyData() {
    var usernameInput = $("#signupUsername").val();
    var passwordInput = $("#signupPassword").val();
    if (usernameInput == "" || passwordInput == "") {
        console.log("data is empty");
        return true;
    }
    console.log("data isnt empty");
    return false;
}