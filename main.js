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
    var gifs = ["Cats", "Chef Ramsey", "Paul Robertson"];

    function displayGifs() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10&api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data);
            var responseData = response.data;
            for (var i = 0; i < responseData.length; i++) {
                var newGif = $('<div class=gifs>');
                var gifImage = $("<img>");
                gifImage.attr("src", responseData[i].images.fixed_height_still.url);
                gifImage.attr('title', "Rating: " + responseData[i].rating);
                gifImage.attr('data-still', responseData[i].images.fixed_height_still.url);
                gifImage.attr('data-state', 'still');
                gifImage.addClass('gif');
                gifImage.attr('data-animate', responseData[i].images.fixed_height.url);
                newGif.append(gifImage);
                $("#gifs-view").prepend(newGif);
            }
        });
    };
    $(document).on('click', '.gif', function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        };
    });
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
