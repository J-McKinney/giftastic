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
    };
    function renderMovies() {
        $("#movieButtons").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#movieButtons").append(a);
        };
    };
    $("#add-movie").on("click", function (event) {
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderMovies();
    });
    $(document).on("click", ".movie", displayMovieInfo);
    renderMovies();
})

$("document").ready(function () {
    var gifs = ["Cats", "Chef Ramsey", "Universe"];

    function displayGifs() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=9&api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data);
            var gifUrl = response.data.image_original_url;
            var gifImage = $("<img>");
            gifImage.attr("src", gifUrl);
            $("#images").prepend(gifImage);

            // $("#gifs-view").prepend("<div id='newGif'></div>")
            // $("#newGif").append("<div>" + "Rated: " + response.data.rating + "</div>");
            // var imageGif = $("<img>");
            // imageGif.attr("src", response.data.image_original_url);
            // $("#gifs-view").prepend(imageGif);
        });
    };
    function renderGifs() {
        $("#gifButtons").empty();
        for (var i = 0; i < gifs.length; i++) {
            var a = $("<button>");
            a.addClass("gif");
            a.attr("data-name", gifs[i]);
            a.text(gifs[i]);
            $("#gifButtons").append(a);
        }
    }
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        gifs.push(gif);
        renderGifs();
    });
    $(document).on("click", ".gif", displayGifs);
    renderGifs();
})


var bands = ["RHCP", "NF", "ODESZA"];
