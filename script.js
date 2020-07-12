

// Sticky Menu //

var topbox = document.querySelector ('.top-box');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 200) {
      topbox.classList.add('scrolled1')
      
    } else {
      topbox.classList.remove('scrolled1')
      
    }
  }

// Move to Div //

  $('.home-js').click (function() {
    $('html, body').animate ({scrollTop: $('.header').offset().top}, 1000);
})

$('.about-us-js').click (function() {
  $('html, body').animate ({scrollTop: $('.general').offset().top -80}, 1000);
})

$('.what-we-do-js').click (function() {
  $('html, body').animate ({scrollTop: $('.what-we-do').offset().top -80}, 1000);
})

$('.sustain-js').click (function() {
  $('html, body').animate ({scrollTop: $('.quality-sustainability').offset().top -50}, 1000);
})

$('.projects-js').click (function() {
  $('html, body').animate ({scrollTop: $('.projects').offset().top -77}, 1000);
})

  $('.contact-us-js').click (function() {
    $('html, body').animate ({scrollTop: $('.contacts').offset().top}, 1000);
})


// Mobile Menu //

$('.menu-burger').click(function() {
  $('.mob-nav-bar').toggleClass('invisible', 1000)
})

$('li').click(function() {
  $('.mob-nav-bar').toggleClass('invisible', 1000)
})