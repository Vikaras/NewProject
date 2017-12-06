// Google maps JS
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

// Carousel Js
$(document).ready(function(){
  $('.slider').bxSlider();

  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.nav-list li a').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav-list li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight(true) > scrollPos) {
      $('.nav-list li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
