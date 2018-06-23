var topics = ['doug bradley', 'robert englund', 'bela lugosi', ]

//create a function that creates new buttons dynamically based on each item in the array
   // Function for displaying topics data
   function renderButtons() {

        $("#topics-view").empty();
    
            // for loop for the array
            for (var i = 0; i < topics.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            var a = $("<button>");
            // Adding a class
            a.addClass("topic");
            // Adding a data-attribute with a value of the topic at index i
            a.attr("data-name", topics[i]);
            // Providing the button's text with a value of the topic at index i
            a.text(topics[i]);
            // Adding the button to the HTML
            $("#topics-view").append(a);
    }
  }

//grab gif data from giphy to populate gifs on button clicks
//gifs should have ratings displayed
$("button").on("click", function() {
      var person = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

    //create a function that pauses/unpauses gif animation
    //run all functions



