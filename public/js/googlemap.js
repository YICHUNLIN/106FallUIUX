

$(function(){
  initMap();
});
 


var map;
function initMap(){
  console.log("mapinit");

  var center = {lat:24.788068, lng:120.999012};
  map = new google.maps.Map(document.getElementById('showmap'), {
    center: center,
    zoom: 14
  });
  var marker = new google.maps.Marker({
          position: center,
          map: map,
          title:"National Chiao Tung Univers",
  });

}
//window.onload=initMap();
//google.maps.event.addDomListener(window, 'load', initMap);

