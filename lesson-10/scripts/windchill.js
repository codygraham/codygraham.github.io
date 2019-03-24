window.onload = function windChill() {
    t = 29;
    wSpeed = 4;
    one = 35.74 + (0.6215 * t);
    two = (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * t * Math.pow(wSpeed, 0.16));

    wChill = one - two;

    document.getElementById('chill').innerHTML = Math.round(wChill) + "&#x2109;";
}