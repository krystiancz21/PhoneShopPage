function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude  = position.coords.longitude;;
    var output = document.getElementById("geo");
    var str = "<p>Szerokość geograficzna: " + latitude + "</p>"+
                "<p>Długość geograficzna: " + longitude + "</p>";

    output.innerHTML = str;

    var wspolrzedne = new google.maps.LatLng(latitude, longitude);
    var opcjeMapy = {
        zoom: 15,
        center: wspolrzedne,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
}

function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}

function getLocation() {
    if (navigator.geolocation) {
        document.getElementById("dod-mapa").innerHTML = '<div id="mapka" class="py-2" style="width:350px; height:250px;"></div>';
        var options = { timeout: 60000 };
        //zwraca obiekt Position z informacjami o geograficznym położeniu urządzenia lub błąd (success, error, options)
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!"); }
}