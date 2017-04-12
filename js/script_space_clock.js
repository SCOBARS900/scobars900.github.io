var flagRotateBorder = false;

var startDateEarth = new Date (2032, 6, 26, 14, 0, 0);
var earthYear = startDateEarth.getFullYear();
var earthMonth = startDateEarth.getMonth();
var earthDays = startDateEarth.getDate();
var earthHours = startDateEarth.getHours();
var earthMinutes = startDateEarth.getMinutes();
var earthSeconds = startDateEarth.getSeconds();
var timeOnEarth;
var dateOnEarth;


var marsYear = 42;
var marsMonth = 1;
var marsDays = 7;
var marsHours = 20;
var marsMinutes = 40;
var marsSeconds = 0;
var timeOnMars;
var dateOnMars;

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var monthMars = ["Sagittarius", "Dhanus", "Capricornus", "Makara", "Aquarius", "Kumbha", "Pisces", "Mina", "Aries", "Mesha", "Taurus", "Rishabha", "Gemini", "Mithuna", "Cancer", "Karka", "Leo", "Simha", "Virgo", "Kanya", "Libra", "Tula", "Scorpius", "Vrishika"];


function earthClock() {
    
    dateOnEarth = "<br>" + "Earth" + "<br>" + monthNames[earthMonth] + " " + checkTime(earthDays) + " " + earthYear;
    
    timeOnEarth = checkTime(earthHours) + ":" + checkTime(earthMinutes) + ":" + checkTime(earthSeconds) + "<br>";
    
    document.getElementById("earthDate").innerHTML = dateOnEarth;
    
    document.getElementById("earthTime").innerHTML = timeOnEarth;
    
    if (earthSeconds < 60) {
        earthSeconds++;
    }
   
    if (earthSeconds == 60) {
        earthMinutes++;
        earthSeconds = 0;
    }
    
    if (earthMinutes == 60) {
        earthHours++;
        earthMinutes = 0;
    }
    
    if (earthHours == 24) {
        earthDays++;
        earthHours = 0;
    }
    
    if (daysInMonth(earthMonth, earthYear) == 28 && earthDays > 28) {
        earthMonth++;
        earthDays = 1;
    } else if (daysInMonth(earthMonth, earthYear) == 29 && earthDays > 29) {
        earthMonth++;
        earthDays = 1;
    } else if (daysInMonth(earthMonth, earthYear) == 30 && earthDays > 30) {
        earthMonth++;
        earthDays = 1;
    } else if (daysInMonth(earthMonth, earthYear) == 31 && earthDays > 31) {
        earthMonth++;
        earthDays = 1;
    }
    
    
    if (earthMonth > 11) {
        earthYear++;
        earthMonth = 0;
    } 
    
}
setInterval("earthClock()", 1000);


function marsClock() {
    dateOnMars = "Mars" + "<br>" + monthMars[marsMonth] + " " + checkTime(marsDays) + " " + checkYear(marsYear);
    
    timeOnMars = checkTime(marsHours) + ":" + checkTime(marsMinutes) + ":" + checkTime(marsSeconds);
    
    document.getElementById("marsDate").innerHTML = dateOnMars;
    
    document.getElementById("marsTime").innerHTML = timeOnMars;
    
    if (marsSeconds < 60) {
        marsSeconds++;
    }
   
    if (marsSeconds == 60) {
        marsMinutes++;
        marsSeconds = 0;
    }
    
    if (marsMinutes == 60) {
        marsHours++;
        marsMinutes = 0;
    }
    
    if (marsHours == 24) {
        marsDays++;
        marsHours = 0;
    }
    
    if (daysInMonthMars(marsMonth) == 27 && marsDays > 27) {
        marsMonth++;
        marsDays = 1;
    } else if (daysInMonthMars(marsMonth) == 28 && marsDays > 28) {
        marsMonth++;
        marsDays = 1;
    }
    
    if (marsMonth > 23) {
        marsYear++;
        marsMonth = 0;
    } 
    
}
setInterval("marsClock()", 1027);



function checkTime(i) {
    if (i < 10) {
    i = "0" + i
    };
    return i;
}

function checkYear(i) {
    if (i < 100) {
    i = "00" + i;
    } else if (i > 100 && i < 1000) {
    i = "0" + i;
    }
    return i;
}

function daysInMonth(m, y) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
}

function daysInMonthMars(m) {
    switch(m) {
        case 5 : case 11 : case 17 : case 23 :
        return 27;
        default:
        return 28;
    }
}

//** Themes **//
document.getElementById("star").onclick = function () {
    if (!flagRotateBorder) {
       document.getElementById("clock").style.animationName = "pulseClock"
        flagRotateBorder = true;
    } else {
        document.getElementById("clock").style.animationName = "none";
        flagRotateBorder = false;
    }
}


TweenMax.staggerTo(".fox", 1, {rotation:360, y:1}, 0.5);



document.getElementById("iconMercury").onclick = function () {              document.getElementById("clock").style.backgroundImage =              "url(../img/mercuryB.svg)";
     document.getElementById("clock").style.borderColor = "#FF355E";
     document.getElementById("clock").style.color = "white";
     document.getElementById("clock").style.animationName = "none";
     document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconVenus").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/venusB.svg)";
     document.getElementById("clock").style.borderColor = "gainsboro";
     document.getElementById("clock").style.color = "white";
     document.getElementById("clock").style.animationName = "none";
     document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconEarth").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/earthB.svg)";
     document.getElementById("clock").style.borderColor = "aqua";
     document.getElementById("clock").style.color = "gray";
     document.getElementById("clock").style.animationName = "none";
     document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconMoon").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/moonB.svg)";
     document.getElementById("clock").style.borderColor = "lightgrey"; 
     document.getElementById("clock").style.color = "gray";
     document.getElementById("clock").style.animationName = "none";
     document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconMars").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/marsB.svg)";
     document.getElementById("clock").style.borderColor = "#FF6037";
     document.getElementById("clock").style.color = "white";
     document.getElementById("clock").style.animationName = "none"; 
     document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconJupiter").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/jupiterB.svg)";
       document.getElementById("clock").style.borderColor = "orange"; document.getElementById("clock").style.color = "white";
       document.getElementById("clock").style.animationName = "none";
       document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconSaturn").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/saturnB.svg)";
       document.getElementById("clock").style.borderColor = "#FFCC33"; document.getElementById("clock").style.color = "white";
       document.getElementById("clock").style.animationName = "none";
       document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconUranus").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/uranusB.svg)";
       document.getElementById("clock").style.borderColor = "grey";  
       document.getElementById("clock").style.color = "white";
       document.getElementById("clock").style.animationName = "none";
       document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconNeptune").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/neptuneB.svg)";
       document.getElementById("clock").style.borderColor = "dodgerblue ";
       document.getElementById("clock").style.color = "white";
       document.getElementById("clock").style.animationName = "none";
       document.getElementById("star").style.opacity = "0";
}

document.getElementById("iconPluto").onclick = function () {                document.getElementById("clock").style.backgroundImage =              "url(../img/plutoB.svg)";
     document.getElementById("clock").style.borderColor = "lightskyblue";
     document.getElementById("clock").style.color = "white";
     document.getElementById("clock").style.animationName = "none";
     document.getElementById("star").style.opacity = "0";
}


document.getElementById("clockTitle").onclick = function () {
    document.getElementById("clock").style.backgroundImage = "";
    document.getElementById("clock").style.borderLeftColor = "#66FF66";
    document.getElementById("clock").style.borderTopColor = "aqua";
    document.getElementById("clock").style.borderRightColor = "#FF9933";
    document.getElementById("clock").style.borderBottomColor = "#FFFF66";
    document.getElementById("clock").style.color = "white";
    document.getElementById("star").style.opacity = "1";
    flagRotateBorder = false;
}











