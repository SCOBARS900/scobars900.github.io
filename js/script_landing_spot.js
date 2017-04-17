//*** Open Weather API ***//
$.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=28.46&lon=-80.56' + '&units=metric' + '&APPID=703e76ae816765cc4a4c82ffeb2b2a6a',
   data: {
      format: 'json'
   },
   error: function() {
      document.getElementById("temp").innerHTML = '<h3>An error has occurred</h3>';
   },
   dataType: 'jsonp',
           
   success: function(data) {
       weatherMain = data.weather[0].main;
       mainTemp = data.main.temp;
       mainTempD = Math.round(mainTemp);
       mainWind = data.wind.speed;
       mainWindD = data.wind.deg;
       
    
       document.getElementById("temp").innerHTML = '<h3>' + mainTempD + '°C ' + weatherMain + '</h3>';
       document.getElementById("wind").innerHTML = '<h3>Wind Speed ' + mainWind + ' m/s</h3>';
       document.getElementById("windDirection").innerHTML = '<h3>Wind Direction ' + mainWindD + '°</h3>';
     
      
   },
   type: 'GET'
});

$.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=35&lon=-118' + '&units=metric' + '&APPID=703e76ae816765cc4a4c82ffeb2b2a6a',
   data: {
      format: 'json'
   },
   error: function() {
      document.getElementById("temp2").innerHTML = '<h3>An error has occurred</h3>';
   },
   dataType: 'jsonp',
           
   success: function(data) {
       weatherMain2 = data.weather[0].main;
       mainTemp2 = data.main.temp;
       mainTempD2 = Math.round(mainTemp2);
       mainWind2 = data.wind.speed;
       mainWindD2 = data.wind.deg;
       
      document.getElementById("temp2").innerHTML ='<h3>' + mainTempD2 + '°C ' + weatherMain2 + '</h3>';
      document.getElementById("wind2").innerHTML ='<h3>Wind Speed ' + mainWind2 + ' m/s</h3>';
      document.getElementById("windDirection2").innerHTML ='<h3>Wind Direction ' + mainWindD2 + '°</h3>';

   },
   type: 'GET'  
});


//*** Elevation API ***//

var capeCanaveral = {
    "lat": "28.619775",
    "lon": "-80.697639"
};

var edwardsAFB = {
    "lat": "34.941341",
    "lon": "-117.883288"
};



Algorithmia.client("simDtGPuO7WJ1xEz+PX205XP1Cg1")
           .algo("algo://Gaploid/Elevation/0.3.6")
           .pipe(capeCanaveral)
           .then(function(data) {
           $("#elevation").html('<h3>Elevation: ' + data.result.slice(11, -3) + '</h3>');
           });

Algorithmia.client("simDtGPuO7WJ1xEz+PX205XP1Cg1")
           .algo("algo://Gaploid/Elevation/0.3.6")
           .pipe(edwardsAFB)
           .then(function(data2) {
           $("#elevation2").html('<h3>Elevation: ' + data2.result.slice(11, -3) + '</h3>');
           });


















