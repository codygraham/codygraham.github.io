var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=7f4e5cd9a307b63c1b929855071744ca&units=imperial", true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    // Calculate wind chill using JSON data
    t = weatherInfo.main.temp;
    wSpeed = weatherInfo.wind.speed;
    one = 35.74 + (0.6215 * t);
    two = (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * t) * Math.pow(wSpeed, 0.16);
    wChill = one - two;

    // Display weatehr condition, temperature, and wind chill
    document.getElementById("condition").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;
    document.getElementById("chill").innerHTML = Math.round(wChill);

    
} // end of function