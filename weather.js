$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p><b>The weather is currently: </b> " + data.currently.summary + " and " + data.currently.temperature + " degrees.</p><p><b>The three day forecast is: </b> </p>" +
     "<li> <b>Tomorrow: </b>" + data.daily.data[1].summary + " High: " + data.daily.data[1].temperatureMax + " degrees. Low: " +data.daily.data[1].temperatureMin + " degrees. </li>" +
     "<li> <b>In Two Days: </b>" + data.daily.data[2].summary + " High: " + data.daily.data[1].temperatureMax + " degrees. Low: " +data.daily.data[1].temperatureMin + " degrees.</li>" +
     "<li> <b>In Three Days: </b>" + data.daily.data[3].summary + " High: " + data.daily.data[1].temperatureMax + " degrees. Low: " +data.daily.data[1].temperatureMin + " degrees.</li>"

 

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
