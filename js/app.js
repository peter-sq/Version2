$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
  
});

(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();

  function individual() {
  
    //Background for corporate button back to blue 
    document.getElementById("corporate").style.background = "#0b1a33";
    //Background for individual button back to pink
    document.getElementById("individual").style.background = "#bc2e3c";
    
    //Change to individual prices
    document.getElementById("wordpress").innerHTML = "$20/mo.";
    document.getElementById("shared").innerHTML = "$20/mo.";
    document.getElementById("vps").innerHTML = "$30/mo.";
  }
  
  function corporate() {
    
    //Background for corporate button back to blue
    document.getElementById("individual").style.background = "#0b1a33";
    //Background for individual button back to pink
    document.getElementById("corporate").style.background = "#bc2e3c";
    
    //Change to individual prices
    document.getElementById("wordpress").innerHTML = "$216/yr.";
    document.getElementById("shared").innerHTML = "$216/yr.";
    document.getElementById("vps").innerHTML = "$324/yr.";
  }
  
  
  

