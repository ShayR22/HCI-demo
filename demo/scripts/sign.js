$("#signupSignup").click(function () {
    if (!isEmptyData()) {
        var username = $("#signupUsername").val();
        var password = $("#signupPassword").val();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        console.log(username + " " + password);

        window.location.href = "login.html";
    } else {
        alert("please fill username and password");
    }
});

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