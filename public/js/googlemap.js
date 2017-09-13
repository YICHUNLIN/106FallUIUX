var map;
function initMap() {
  var goal = {lat:24.432309, lng:118.422230};
  var iconBase = "https://k3.kmtree.me/images/"
  var icons = {
  	lake:"lake.svg",
  	highschool:"highschool.svg",
  	hospital:"hospital.svg",
  	junior:"junior.svg",
  	goal:"goal.svg",
  	market:"market.svg"
  }

  var center = {lat:24.438160, lng:118.421481};
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 14
  });
  
}
