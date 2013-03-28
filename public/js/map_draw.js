$(document).ready(function(){

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(37.753208,-122.442284),
              zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

})
