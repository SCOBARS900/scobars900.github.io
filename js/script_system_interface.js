//*** Launch Countdown ***//
var flagLaunch = false;
var flagCountdown = true;
var countDown = 10;

document.getElementById("launch").onclick = function () {
  flagCountdown = false;
}

function launchCD() {
    if (!flagLaunch && !flagCountdown) {
    document.getElementById("lCountdown").innerHTML = '<h4>Countdown: ' + countDown + ' sec' + '</h4>';
    countDown--;
    }
    if (countDown == -2) {
    document.getElementById("lCountdown").innerHTML = '<h4>Countdown: Launched</h4>';
    flagCountdown = true;
    flagLaunch = true;
    }
}
setInterval('launchCD()', 1000);

//*** Ship Controls ***//

// Throttle and Speed //
var throttle = document.getElementById("throttle");
var currentThrottle = 0;
throttle.innerHTML = '<h4>Throttle Power Level: ' + currentThrottle + ' units' + '</h4>';

var startingSpeed = 0;
var defaultSpeed = 16.876;
var speedRounded = Math.round(defaultSpeed * 1000) / 1000;
document.getElementById("speed").innerHTML = '<h4>Speed: ' + startingSpeed + ' km/s' + '</h4>';

var flagSpeed = true;

function startSpeed() {
    if (flagSpeed && flagLaunch) {
        startingSpeed += 1.251;
        currentThrottle += 100;
        var startSpeedRounded = Math.round(startingSpeed * 1000) / 1000;
        document.getElementById("speed").innerHTML = '<h4>Speed: ' + startSpeedRounded + ' km/s' + '</h4>';
        throttle.innerHTML = '<h4>Throttle Power Level: ' + currentThrottle + ' units' + '</h4>';
        if (startingSpeed >= 15 && currentThrottle >= 1200) {
            document.getElementById("speed").innerHTML = '<h4>Speed: ' + defaultSpeed + ' km/s' + '</h4>';
            throttle.innerHTML = '<h4>Throttle Power Level: ' + currentThrottle + ' units' + '</h4>';
            flagSpeed = false;
        }
    }     
}
setInterval('startSpeed()', 1000);

document.getElementById("plusThrottle").onclick = function () {
    if (flagLaunch) {
        setTimeout('alert("Access denied. Only the captain can change the ship\'s commands");', 1);
    }
}

document.getElementById("lessThrottle").onclick = function () {
    if (flagLaunch) {
        setTimeout('alert("Access denied. Only the captain can change the ship\'s commands");', 1);
    }
}

// fuel //
var totalFuel = 2612155.876;
document.getElementById("fuel").innerHTML = '<h4>Current Fuel: ' + totalFuel + ' tonnes' + '</h4>';

function fuel() {
    if (flagLaunch) {
        var fuelRounded = Math.round(totalFuel * 1000) / 1000;
        document.getElementById("fuel").innerHTML = '<h4>Current Fuel: ' + fuelRounded + ' tonnes' + '</h4>';
    
        if (totalFuel == 0) {
        document.getElementById("fuel").innerHTML = '<h4>Fuel is Over</h4>';
        } else {
        totalFuel -= (defaultSpeed * 3);
        }  
    }
}
var countdownFuel = setInterval('fuel()', 1000);

// Acceleration (G-force), Atmosphere, current location, gravity //
var flag2 = true;
var earthGForce = 9.8;
var spaceGForce = 0;
var marsGforce = 3.8;

var marsAtmosphere = "96% carbon dioxide 1.9% argon 1.9% nitrogen";

document.getElementById("cLocation").innerHTML = '<h4>Current Location: Earth</h4>';
document.getElementById("gForce").innerHTML = '<h4>Acceleration (G-force): ' + earthGForce + ' m/s<sup>2</sup>' + '</h4>';
document.getElementById("atmosphere").innerHTML = '<h4>Atmosphere: nitrogen:78.09% oxygen:20.95%' + '<br>' + 'argon:0.93% carbon dioxide:0.04%</h4>';
document.getElementById("gravity").innerHTML = '<h4>Gravity: 1g</h4>';

function gForceSpace() {
    if (flag2 && flagLaunch) {
        document.getElementById("gForce").innerHTML = '<h4>Acceleration (G-force): ' + spaceGForce + ' m/s<sup>2</sup>' + '</h4>';
        document.getElementById("atmosphere").innerHTML = '<h4>Atmosphere: none </h4>';
        document.getElementById("cLocation").innerHTML = '<h4>Current Location: Space</h4>';
        document.getElementById("gravity").innerHTML = '<h4>Gravity: 0g</h4>';
        flag2 = false;
    }
    if (seconds < 3600) {
        document.getElementById("gForce").innerHTML = '<h4>Acceleration (G-force): ' + marsGforce + ' m/s<sup>2</sup>' + '</h4>';
        document.getElementById("atmosphere").innerHTML = '<h4>Atmosphere: ' + marsAtmosphere + '</h4>';
        document.getElementById("cLocation").innerHTML = '<h4>Current Location: Mars</h4>';
        document.getElementById("gravity").innerHTML = '<h4>Gravity: 0.376g</h4>';
    } 
}
setInterval('gForceSpace()', 90000);



//*** Time to Mars ***//

/* Closest approach: 942 hours (39 days)
   Farthest approach: 6,944 hours (289 days)
   On average: 3,888 hours (162 days) */

var minutesToArrive = 233280; // 233280/60 = 3888 hours --- 3888/60 = 162 days //
var seconds = minutesToArrive * 60;  // 233280*60= 13996800 seconds //

document.getElementById("timeToArrive").innerHTML = '<h4>Time to Mars: 162 days</h4>';

function travelTime() {
    if (flagLaunch)  {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
// seconds = total time ===> (days * 86400) to convert days in seconds again 24*60*60=86400 // 
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
// same here to convert hours in seconds again //
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
    
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    document.getElementById('timeToArrive').innerHTML = "<h4>Time to Mars: " + days + " days " + hours + ":" + minutes + ":" + remainingSeconds + "</h4>";
    
    if (seconds == 0) {
        clearInterval(countdownTime);
        document.getElementById('timeToArrive').innerHTML = "Travel Completed";
    } else {
        seconds--;
    }
    }
    
}
setInterval('travelTime()', 1000);
    

//** Suplies **//
var totalMeals = 1236000;
var totalWater = 618000;
document.getElementById('meal').innerHTML ="<h4>" + totalMeals + " Meals" + "</h4>";
document.getElementById('water').innerHTML = "<h4>" + totalWater + " Water" + "</h4>"

function supplies() {
    if (flagLaunch) {
    var mealsRounded = Math.round(totalMeals * 10) / 10;
    var waterRounded = Math.round(totalWater * 10) / 10;
    
    document.getElementById('meal').innerHTML = "<h4>" + mealsRounded + " Meals" + "</h4>";
    document.getElementById('water').innerHTML = "<h4>" + waterRounded + " Water" + "</h4>";
    
    
     
    if (totalMeals == 0) {
        document.getElementById('meal').innerHTML = "Meal is Over";    
    } else {
        totalMeals -= 2;
        // each 10 seconds it will decrease 2 meals //
    }
    
    if (totalWater == 0) {
        document.getElementById('water').innerHTML = "Water is Over";
    } else {
        totalWater -= 1;
        // each 10 seconds it will decrease 1 water //
    }
    }
    
}
setInterval('supplies()', 10000);


//** Distance **//

/* The closest approach: 34.8 million miles (56 million km)
   Farthest approach: 250 million miles (401 million km)
   On average: 140 million miles (225 million km) */


var startDistance = 0;
var endDistance = 225000000;
var flagDistance = true;
document.getElementById('distanceT').innerHTML = "<h4>Distance Traveled: " + startDistance + " km" + "</h4>";
document.getElementById('distanceR').innerHTML = "<h4>Distance Remaining: " + endDistance + " km" + "</h4>"; 

    
function distanceTraveled() {
    if (flagLaunch) {
    var distanceRounded = Math.round(startDistance * 100) / 100;
    var distanceMilesRounded = Math.round((distanceRounded * 0.621) * 100) / 100;
    var distanceRemaining = Math.round((endDistance - startDistance) * 100) / 100;
    var distanceMilesRemaining = Math.round(((endDistance - startDistance) * 0.621) * 100) / 100;
    
    if (flagDistance) {
       document.getElementById('distanceT').innerHTML = "<h4>Distance Traveled: " + distanceRounded + " km" + "</h4>";
       document.getElementById('distanceR').innerHTML = "<h4>Distance Remaining: " + distanceRemaining + " km" + "</h4>"; 
    } else {
       document.getElementById('distanceT').innerHTML = "<h4>Distance Traveled: " + distanceMilesRounded + " Miles" + "</h4>";
       document.getElementById('distanceR').innerHTML = "<h4>Distance Remaining: " + distanceMilesRemaining + " Miles" + "</h4>";
    }
    
    
    if (startDistance >= 225000000) {
        document.getElementById('distanceT').innerHTML = "Distance Completed";
    } else {
        startDistance += 64.31;
        // each 4 seconds distance traveled is + 64.31 km //
    }
    
    document.getElementById("convertK").onclick = function () {
        document.getElementById('distanceT').innerHTML ="<h4>Distance Traveled: " + distanceMilesRounded + " Miles" + "</h4>";
        document.getElementById('distanceR').innerHTML = "<h4>Distance Remaining: " + distanceMilesRemaining + " Miles" + "</h4>";
        flagDistance = false;
    }
    
    document.getElementById("convertM").onclick = function () {
        document.getElementById('distanceT').innerHTML = "<h4>Distance Traveled: " + distanceRounded + " km" + "</h4>";
        document.getElementById('distanceR').innerHTML = "<h4>Distance Remaining: " + distanceRemaining + " km" + "</h4>"; 
        flagDistance = true;
    }
    }
}
setInterval('distanceTraveled()', 4000);














