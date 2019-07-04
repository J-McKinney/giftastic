$("document").ready(function () {

    var movies = ["Dragon Ball Super", "Hell's Kitchen", "Jurassic Park"];

    function displayMovieInfo() {
        var movie = $(this).attr("data-name");
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#movies-view").prepend("<div id='newMovie'></div>")
            $("#newMovie").append("<div>" + "Rated: " + response.Rated + "</div>");
            $("#newMovie").append("<div>" + "Plot: " + response.Plot + "</div>");
            $("#newMovie").append("<div>" + "Actors: " + response.Actors + "</div>");
            $("#newMovie").append("<div>" + "<img src='" + response.Poster + "' />" + "</div>");
        });
    }
    function renderButtons() {
        $("#movieButtons").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#movieButtons").append(a);
        }
    }
    $("#add-movie").on("click", function (event) {
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();
    });
    $(document).on("click", ".movie", displayMovieInfo);
    renderButtons();
})

$("document").ready(function () {
    var gifs = ["cats", "chef ramsey", "universe"];

    function displayGif () {
        var gif = $(this).attr("data-name");
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy" 
        "https://api.giphy.com/v1/gifs/search?api_key=qHu5bzg0go8o2WtfYZxsl7uxWRlGzjKy&q=" + gif + "&limit=10&offset=0&rating=R&lang=en";
    }


})

$("document").ready(function () {
    var bands = ["RHCP", "NF", "ODESZA"];



})