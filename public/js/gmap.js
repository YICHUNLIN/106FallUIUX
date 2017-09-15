function initMap() {
  var mapDiv = document.getElementById('showmap');
  var map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(24.788068, 120.999012)
  });
  
  var marker = new google.maps.Marker({
          position: new google.maps.LatLng(24.788068, 120.999012),
          map: map,
          title:"National Chiao Tung Univers",
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    window.alert('Map was clicked!');
  });
}