
var myLatLng = new google.maps.LatLng(37.753208,-122.442284)

//inititalizes new map
function initialize() {
  var mapOptions = {
            center: myLatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var myMap = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

//initializes map marker for center of map
  var newMarker = new google.maps.Marker ({
    position: myLatLng,
    map: myMap,
    draggable: true,
    title: "your location"
    });

//puts marker onto map
  newMarker.setMap(myMap);

//captures lat-long info
  google.maps.event.addListener(newMarker, 'dragend', function(event){
    // document.getElementById("latbox").value = this.getPosition().lat();
    // document.getElementById("lngbox").value = this.getPosition().lng();
    var currentLat = this.getPosition().lat();
    var currentLong = this.getPosition().lng();
    console.log(currentLat, currentLong)
  })



//-----------this comes after everything else
}
  google.maps.event.addDomListener(window, 'load', initialize);




// //for adding marker location to html on page
//   google.maps.event.addListener(newMarker, 'dragend', function(event){
//     document.getElementById("current-loc").innerHTML = "<p>Current lat is: " + event.latLng.lat().toFixed(4) + "</p>";

//   });
