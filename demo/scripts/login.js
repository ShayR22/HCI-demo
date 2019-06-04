//TODO this is for testing remove this shit after
// $(document).ready(function () {
//     localStorage.clear();
// })

$(document).ready(function () {
    $("#login").click(function () {
        var usernameInput = $("#loginUsername").val();
        var passwordInput = $("#loginPassword").val();

        //TODO change by using method to search the enitre localStorage
        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");
        console.log("username:" + username);
        console.log("password:" + password);
        //this assume nobody had register 
        if (username === null || password === null) {
            alert("User doesn't exist in the system");

            return false;
        }

        console.log(usernameInput + ", " + passwordInput);
        if (username == usernameInput && password == passwordInput) {
            window.location = "search.html";
            return true;
        } else {
            alert("Wrong username or password");
        }
    })
});