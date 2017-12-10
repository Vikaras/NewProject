// Google maps JS
function initMap () {
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

// hamburger menu
$(document).ready(function () {
  $('.cross').hide()
  $('.hamburger').click(function () {
    $('.menu').slideToggle('slow', function () {
      $('.hamburger').hide()
      $('.cross').show()
    })
  })

  $('.cross ') .click(function () {
    $('.menu').slideToggle('slow', function () {
      $('.cross').hide()
      $('.hamburger').show()
    })
  })
})

// Carousel Js
$(document).ready(function () {
  $('.slider').bxSlider()

  $(document).on('scroll', onScroll)

  // smoothscroll
  $('.nav-list li a').on('click', function (e) {
    e.preventDefault()
    $(document).off('scroll')

    $('a').each(function () {
      $(this).removeClass('active')
    })
    $(this).addClass('active')

    var target = this.hash,
      menu = target

    $target = $(target)
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target
      $(document).on('scroll', onScroll)
    })
  })
})

function onScroll (event) {
  var scrollPos = $(document).scrollTop()
  $('.nav-list li a').each(function () {
    var currLink = $(this)
    var refElement = $(currLink.attr('href'))
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight(true) > scrollPos) {
      $('.nav-list li a').removeClass('active')
      currLink.addClass('active')
    } else {
      currLink.removeClass('active')
    }
  })
}

// Form

(function () {
  'use strict'

  function qs (selector) {
    return document.querySelector(selector)
  }

  var questions = []
  var form = qs('#contact-form')
  var nameInput = qs('#name-input')
  var emailInput = qs('#email-input')
  var textArea = qs('#contact-textarea')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = nameInput.value
    var email = emailInput.value
    var text = textArea.value

    if (name === '') {
      alert('Please enter your name.')
      return
    }

    if (email === '') {
      alert('Please enter your email.')
      return
    }

    if (text === '') {
      alert('Please write your question.')
      return
    }

    var question = {
      name: name,
      email: email,
      text: text
    }

    questions.push(question)
    alert('Thank you for your question!')
  })
})()

// gallery filter

jQuery('document').ready(function ($) {
  $('.gallery-filters li').on('click', function () {
    $('.gallery-filters li').removeClass('active')
    $(this).addClass('active')
    filter = $(this).attr('data-gallery-filter')

    $('.gallery-column').each(function () {
      if (filter == 'all') {
        $(this).fadeIn()
      } else {
        $(this).hide()
        if ($(this).attr('data-filter-category') == filter) {
          $(this).fadeIn()
        }
      }
    })
    return false
  })
})
