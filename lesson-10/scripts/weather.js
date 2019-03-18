var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=7f4e5cd9a307b63c1b929855071744ca&units=imperial", true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById("condition").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;

    
} // end of function