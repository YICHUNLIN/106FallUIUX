var map;
function initMap() {
 

  var center = {lat:24.438160, lng:118.421481};
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 14
  });
  
}
