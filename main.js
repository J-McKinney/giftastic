$("document").ready(function () {
    var movies = ["Dragon Ball Super", "Hell's Kitchen", "Jurassic Park"];

    // function displayMovieInfo() {
    $(document).on("click", ".movie", function () {
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
    });
    function renderMovies() {
        $("#movieButtons").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#movieButtons").append(a);
        }
    } renderMovies();
    $("#add-movie").on("click", function (event) {
        event.preventDefault();
        var exist = false;
        if (movies.indexOf($("#movie-input").val().trim().toLowerCase()) !== -1) {
            exist = true;
        } if ($("#movie-input").val().trim() !== "" && exist === false) {
            var newMovie = $("#movie-input").val().trim().toLowerCase();
            movies.push(newMovie);
            var b = $("<button>").text(newMovie);
            b.attr("data-name", newMovie);
            b.addClass("movie");
            $("movieButtons").append(b);
        } $("#movie-input").val("");
    });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("document").ready(function () {
    var gifs = ["Cats", "Bill Nye", "Paul Robertson"];

    $(document).on("click", ".giffy", function () {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=1&api_key=dc6zaTOxFJmzC";
        // dc6zaTOxFJmzC     4onUOnRBH23LD0PPRIXrpOPqLWKps9lH
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rated: " + rating);
                var gifsImage = $("<img class='result'>");
                gifsImage.attr("src", results[i].images.fixed_width_still.url);
                gifsImage.attr("data-still", results[i].images.fixed_width_still.url);
                gifsImage.attr("data-animate", results[i].images.fixed_width.url);
                gifsImage.attr("data-state", "still");
                gifDiv.prepend(p);
                gifDiv.prepend(gifsImage);
                $("#gifs-view").prepend(gifDiv);
            }
        });
    });
    $(document).on("click", ".result", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })
    function renderGifs() {
        $("#gifButtons").empty();
        for (var i = 0; i < gifs.length; i++) {
            var a = $("<button>");
            a.addClass("giffy");
            a.attr("data-name", gifs[i]);
            a.text(gifs[i]);
            $("#gifButtons").append(a);
        }
    } renderGifs();
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var exist = false;
        if (gifs.indexOf($("#gif-input").val().trim().toLowerCase()) !== -1) {
            exist = true;
        } if ($("#gif-input").val().trim().toLowerCase() !== "" && exist === false) {
            var newGif = $("#gif-input").val().trim().toLowerCase();
            gifs.push(newGif);
            var b = $("<button>").text(newGif);
            b.attr("data-name", newGif);
            b.addClass("giffy");
            $("#gifButtons").append(b);
        } $("#gif-input").val("");
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var bands = ["RHCP", "NF", "ODESZA"];

// function lower() {
//     if (event.keyCode >= 8 && event.keyCode <= 202) {
//         userGuess(event.key.toLowerCase());
//     }
// }
