function initMap() {
  var uluru = {lat: 51.3450, lng: 0.1317}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  })
  new google.maps.Marker({
    position: uluru,
    map: map
  })
}

$(document).ready(function(){
  $('.slider').bxSlider();
});
