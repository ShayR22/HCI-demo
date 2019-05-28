$(document).ready(function () {
    $("#list-profile-years").click(function () {
        localStorage.setItem("searchBy", "years")
        window.location = "search-songs/songs-category.html";
    })
})