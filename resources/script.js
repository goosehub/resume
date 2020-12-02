function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {lat: 29.5, lng: -82},
        mapTypeId: 'terrain'
    });
    var squareCoords = [
        {lat: 29, lng: -82},
        {lat: 30, lng: -82},
        {lat: 30, lng: -83},
        {lat: 29, lng: -83}
    ];
    var workArea = new google.maps.Polygon({
        paths: squareCoords,
        strokeColor: '#009999',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    workArea.setMap(map);
}

$(function(){
    $(".typed").typed({
        strings: ["Developer", "Engineer", "Architect"],
        typeSpeed: 30,
        startDelay: 1200,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
    });
});