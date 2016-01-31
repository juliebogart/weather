$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p>The weather is currently " + data.currently.summary + " and " + data.currently.temperature + " Degrees</p><p>The three day forecast is: </p>" +
     "<li> Tomorrow: " + data.daily.data[1].summary + "</li>" +
     "<li> In Two Days: " + data.daily.data[2].summary + "</li>" +
     "<li> In Three Days: " + data.daily.data[3].summary + "</li>"

//data.dailydata[1].summary
 //data.currently.windspeed
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
