//TODO this is for testing remove this shit after
// $(document).ready(function () {
//     localStorage.clear();
// })


$("#loginPageLogin").click(function () {

    var usernameInput = $("#loginPageUsername").val();
    var passwordInput = $("#loginPagePassword").val();

    //TODO change by using method to search the enitre localStorage
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    //this assume nobody had register 
    if (username === null || password === null) {
        console.log("FML");
        alert("User doesn't exist in the system");
        return false;
    }

    console.log(usernameInput + ", " + passwordInput);
    if (username == usernameInput && password == passwordInput) {
        window.location.href = "searchAndResultPages.html";
    } else {
        alert("Wrong username or password");
    }
})

$("#loginPageSignUp").click(function () {
    window.location = "signup.html";
})

$("#loginPageGuest").click(function () {
    window.location = "search.html";
})