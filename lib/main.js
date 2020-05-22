'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        //change nav color
        if (isScrolled) {
          navbar.style.backgroundColor = primary;
        } else {
          if (isClicked === false) {
            navbar.style.backgroundColor = primary;
            isClicked = true;
          } else if (isClicked) {
            navbar.style.backgroundColor = 'transparent';
            isClicked = false;
          }
        }

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
var isClicked = false;
var isScrolled = false;

var primary = '#9f00a7';

var navbar = document.getElementById('nav');

window.addEventListener("scroll", function (event) {
  var deviceHeight = window.screen.height * 0.9;
  var scroll = this.scrollY;

  if (scroll > deviceHeight) {
    isScrolled = true;
    navbar.style.backgroundColor = primary;
  } else if (scroll < deviceHeight) {
    if (isClicked) {
      navbar.style.backgroundColor = primary;
    } else {
      navbar.style.backgroundColor = 'transparent';
      isScrolled = false;
    }
  }
});